export default function Placeholder({ children, isFocused, hasValue, innerProps }) {
  return (
    <p className={`autocomplete_input_placeholder ${!hasValue && !isFocused ? 'hidden' : ''}`} {...innerProps}>{children} </p>
  )
}
