export function isFinishEditing(mask, format, value) {
  if(!value) { return false }
  if(Array.isArray(mask)) {
    return mask.reduce((res, val) => {
      return res.replace(new RegExp(val, 'g'), '')
    }, value).length === format.length
  }
  return value.replace(new RegExp(mask, 'g'), '').length === format.length
}
