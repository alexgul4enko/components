export default function noOptionsMessage({ inputValue }) {
  if(!inputValue) {
    return (<span>No results found</span>)
  }
  return (<span>No results found for <b>{inputValue}</b></span>)
}
