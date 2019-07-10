import { Component } from 'react'
import Cropper from 'react-cropper'
import debounce from 'lodash/debounce'

export default class CustomCropper extends Component {
  constructor(props) {
    super(props)
    this.onCrop = debounce(this.handleCrop.bind(this), 300)
  }


  handleCrop() {
    this.preview.src = this.cropper.getCroppedCanvas().toDataURL()
  }

  clear = () => {
    this.cropper.cropper.clear()
    this.preview.src = this.cropper.getCroppedCanvas().toDataURL()
  }

  crop = () => {
    this.cropper.cropper.crop()
    this.preview.src = this.cropper.getCroppedCanvas().toDataURL()
  }

  closeAndSave = () => {
    const imageData = this.cropper.getImageData()
    const data = this.cropper.getData()
    if(data.height === 0) {
      cropStyles.height = imageData.naturalHeight
    }
    if(data.width === 0) {
      cropStyles.width = imageData.naturalWidth
    }
    this.props.onChange(data)
  }

  render() {
    const { constrols: Header, value, data } = this.props
    return (
      <div className="custom_cropper">
        <Header
          value={value}
          clear={this.clear}
          crop={this.crop}
          closeAndSave={this.closeAndSave}
        />
        <div className="cropper">
          <aside>
            <p>Original image</p>
            <img
              className="crop-image-original"
              src={value}
            />
            <p>Croped image</p>
            <img
              className="custom_cropper_preview"
              ref={ref => this.preview = ref}
            />
          </aside>
          <Cropper
            ref={ref => this.cropper = ref}
            src={value}
            crop={this.onCrop}
            zoomable={false}
            scalable={false}
            viewMode={2}
            data={data}
          />
        </div>
      </div>
    )
  }
}
