export default function SingleValue({ innerProps, children }) {
  return (
    <div className="autocoplete_singleValue" {...innerProps}>
      {children}
    </div>
  )
}
