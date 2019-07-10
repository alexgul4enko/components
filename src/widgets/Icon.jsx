export default function Icon({ name, color, className = '', size }) {
  return (
    <i className={`icon-${name} ${className}`} style={{ color, fontSize: `${size}px` }}/>
  )
}
