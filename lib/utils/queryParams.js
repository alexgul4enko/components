import isEmpty from 'lodash/isEmpty'

const convertValueFor = ['ordering']
const integers = ['offset', 'limit']

export function parseQueryParams(str) {
  if(str.length <= 2) {
    return {} // '' || '?'
  }

  return str
    .substr(1) // symbol '?'
    .split('&')
    .reduce(function(params, param) {
      var paramSplit = param.split('=').map(function(chunk) {
        return decodeURIComponent(chunk.replace('+', '%20'))
      })
      const name = paramSplit[0]
      let value = paramSplit[1]
      if(integers.includes(name)) {
        value = parseInt(value, 10)
      }
      params[name] = params.hasOwnProperty(name) ? [].concat(params[name], value) : value
      return params
    }, {})
}

export function buildQueryParams(params) {
  if(isEmpty(params)) {
    return ''
  }

  return Object.keys(params).reduce(function(ret, key) {
    let value = params[key]

    if(value === null || value === undefined) {
      return ret
    }

    if(!Array.isArray(value)) {
      value = [value]
    }

    value.forEach(function(val) {
      if(String(val).length > 0) {
        ret.push(
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(val)
        )
      }
    })
    // TODO null should not be here, check field components

    return ret
  }, []).join('&')
}
