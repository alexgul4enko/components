export default function FormHelperText({ required, children, maxLength, length }) {
  return (
    <span className="input_helper">
      {required && '*'}
      {children}
      {maxLength && (<span className="restr">{length}/{maxLength}</span>)}
    </span>
  )
}
