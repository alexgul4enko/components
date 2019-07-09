import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


export default function LoadingButton({
  loadingColor = 'inherit',
  children,
  loading,
  className,
  size = 28,
  ButtonComponent = Button,
  ...rest }) {
  return (
    <ButtonComponent {...rest} className={`loading_button ${className} ${loading ? 'loading' : 'hide_loading'}`}>
      <CircularProgress
        className="loading_indicator"
        size={size}
        color={loadingColor}
      />
      <div className="loading_button_content">
        {children}
      </div>
    </ButtonComponent>
  )
}
