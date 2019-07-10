import { Component } from 'react'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'
import uniqBy from 'lodash/uniqBy'
import uuidv4 from 'uuid/v4'
import HtmlView from './HtmlView'

export default class HtmlViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [],
      activeIndex: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.body !== this.props.body ||
      this.state.elements !== nextState.elements ||
      this.state.activeIndex !== nextState.activeIndex
  }

  handleScroll = (event) => {
    const scrollPosition = this.scrollElement.pageYOffset || this.scrollElement.scrollTop
    const activeIndex = this.state.elements.findIndex(({ item }, index) => (item.offsetTop + $(item).outerHeight(true)) >= scrollPosition || index === this.state.elements.length - 1)
    this.setState({ activeIndex })
  }

  buildElements = () => {
    const elements = [...findDOMNode(this).children].filter(item => {
      return item.nodeName === 'H1' || item.nodeName === 'H2' || item.nodeName === 'H3' || item.nodeName === 'H4'
    }).map(item => {
      return {
        text: item.innerText,
        item,
      }
    }).filter(({ text }) => !!(text && text.replace(/\s/g, '')))
    this.setState({ elements: uniqBy(elements, 'text') })
    const links = [...findDOMNode(this).querySelectorAll('a')]
    links.forEach(item => {
      if($(item).find('img').length > 0) {
        $(item).addClass('remove-hover')
      }
    })
  }

  componentDidMount() {
    this.scrollElement = document.getElementById(this.props.selector)
    this.scrollElement.onscroll = this.handleScroll
    findDOMNode(this).addEventListener('resize', this.buildElements)
    this.scrollElement.scrollTo({ top, left: 0, behavior: 'smooth' })
  }

  componentWillUnmount() {
    this.scrollElement.removeEventListener('scroll', this.handleScroll, false)
    findDOMNode(this).removeEventListener('resize', this.buildElements, false)
  }

  scrollTo = (item) => () => {
    const top = item.offsetTop
    this.scrollElement.scrollTo({ top, left: 0, behavior: 'smooth' })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.body === this.props.body) { return }
    this.buildElements()
  }

  render() {
    return (
      <HtmlView
        {...this.props}
        {...this.state}
        scrollTo={this.scrollTo}
      />
    )
  }
}
