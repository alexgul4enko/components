import TextField from '@material-ui/core/TextField'
import get from 'lodash/get'

export default function Control({
  children,
  innerProps,
  innerRef,
  selectProps,
}) {
  return (
    <TextField
      fullWidth
      className="autocomplete_input"
      InputProps={{
        inputComponent,
        inputProps: {
          ref: innerRef,
          children,
          ...innerProps,
          value: get(selectProps, 'TextFieldProps.value'),
          id: get(selectProps, 'TextFieldProps.htmlFor'),
        },
      }}
      {...get(selectProps, 'TextFieldProps', {})}
    />
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}
