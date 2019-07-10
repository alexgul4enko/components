import CircularProgress from '@material-ui/core/CircularProgress'

export default function Loading({ isLoading, children, size = 40 }) {
  return isLoading ? <div className='loading_wrapper'><CircularProgress size={size} color="primary"/></div> : children
}
