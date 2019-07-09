import $ from 'jquery'
import { Component } from 'react'
import { findDOMNode } from 'react-dom'
import get from 'lodash/get'
require('truncate.js')

export default class Truncate extends Component {
  render() {
    return this.props.children
  }
  componentDidMount() {
    const truncated_element = $(findDOMNode(this))
      .truncate({
        lines: 3,
      })
    const jqueryKey = Object.keys(get(truncated_element, '[0]')).find(item => item.startsWith('jQuery'))
    const isTruncated = get(truncated_element, `[0].${jqueryKey}.jqueryTruncate.isTruncated`)
    if(isTruncated) {
      $(findDOMNode(this)).addClass('truncated')
    }
  }
}
