import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

export default function MaskedInput(props) {
  const { inputRef, onChange, ...other } = props
  return (
    <NumberFormat
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      onValueChange={onChange}
    />
  )
}

MaskedInput.propTypes = {
}

MaskedInput.defaultProps = {

}
