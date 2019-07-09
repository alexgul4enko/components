import MenuItem from '@material-ui/core/MenuItem'

export default function OptionComponent({ innerRef, isFocused, isSelected, innerProps, children }) {
  return (
    <MenuItem
      ref={innerRef}
      selected={isFocused}
      component="div"
      className={`autocopleteItem ${isSelected ? 'active' : ''}`}
      {...innerProps}
    >
      {children}
    </MenuItem>
  )
}
