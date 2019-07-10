import { Component, Fragment } from 'react'
import Icon from '../../../widgets/Icon'
import withModal from '../../../hocs/withModal'
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'
import IconButton from '@material-ui/core/IconButton'
import Grow from '../../../widgets/Grow'
import has from 'lodash/has'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import CustomCropper from './CustomCropper'
import HeaderControls from './HeaderControls'

class DropzoneInput extends Component {
  onDrop = (files) => {
    let reader = new FileReader()
    reader.onloadend = () => {
      this.props.onChange({ file: reader.result })
    }
    reader.readAsDataURL(files[0])
  }

  onDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.props.onChange(null)
  }

  renderInput = () => {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="drop-zone-input">
            <input
              {...getInputProps()}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
            />
            <p className="desc">Drag & Drop files here</p>
            <p className="desc">or</p>
            <Button
              variant="outlined"
              color="primary"
              type="button"
            >
              <Icon name="file_upload"/>
              Browse files
            </Button>
          </div>
        )}
      </Dropzone>
    )
  }

  closeCrop = () => this.collapse.close()

  handleCrop = (cropStyles) => {
    this.props.onChange({ ...this.props.value, cropStyles })
    this.collapse.close()
  }

  renderImage = () => {
    const { value, active, toggle, setToggle, onChange } = this.props

    return (
      <Fragment>
        <div
          className="drop-zone-image"
          style={{ backgroundImage: `url(${get(value, 'file')})` }}
        />
        <IconButton onClick={_ => setToggle(true)}><Icon name="crop"/></IconButton>
        <IconButton onClick={this.onDelete}><Icon name="delete_outline"/></IconButton>
        <Grow
          className="drop-zone-crop"
          active={active}
          wrapperClass="crop_container"
          closeOnOutsideClick={false}
          onClose={_ => setToggle(false)}
          ref={ref => this.collapse = ref}
        >
          <CustomCropper
            value={get(value, 'file') }
            data={isEmpty(get(value, 'cropStyles')) ? null : value.cropStyles }
            onChange={this.handleCrop}
            constrols={(props) => (
              <HeaderControls
                {...props}
                closeCrop={this.closeCrop}
                onDelete={this.onDelete}
              />
            )}
          />
        </Grow>
      </Fragment>
    )
  }

  render() {
    const { label, value, required } = this.props
    return (
      <Fragment>
        <FormLabel required={required} className="form-controll-label drop-zone-label">{label}</FormLabel>
        <div className="drop-zone">
          {has(value, 'file') ? this.renderImage() : this.renderInput()}
        </div>
      </Fragment>
    )
  }
}

export default withModal(DropzoneInput)
