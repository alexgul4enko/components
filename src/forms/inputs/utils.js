import memizedOne from 'memoize-one'
import isEmpty from 'lodash/isEmpty'

function prepareData(array, keyExtractor, labelExtractor) {
  if(isEmpty(array) || !Array.isArray(array)) {
    return []
  }
  if(!keyExtractor || !valueExtractor) { return array }
  return array.map(item => ({ label: labelExtractor(item), value: keyExtractor(item), ...item }))
}

export var makeVariants = memizedOne(prepareData)
