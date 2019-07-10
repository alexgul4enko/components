import { createContext, Component } from 'react'
import get from 'lodash/get'

let storage = window.localStorage
let browserLang = navigator.language || navigator.userLanguage
const country = (storage.lang || browserLang.split('-')[0]).toLowerCase()

const translations = JSON.parse(storage.getItem('translations') || '{}')

const { Provider, Consumer: Translator } = createContext({ translations })

class TranslateProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      translations,
    }

    // TODO: Fix API_URL variable reference.
    fetch(`${process.env.API_URL}translations/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ translations: data })
        storage.setItem('translations', JSON.stringify(data))
      })

    this.gettext = this.gettext.bind(this)
  }

  gettext(text) {
    if(!text) {
      return ''
    }
    return get(this.state.translations, `[${text}].${country}`, get(this.state.translations, `[${text}].en`, text)) || text
  }

  render() {
    return (
      <Provider value={{ translations: this.state.translations, gettext: this.gettext }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Translator, TranslateProvider }

export default function gettext(text) {
  return (
    <Translator>
      {
        ({ gettext }) => gettext(text)
      }
    </Translator>
  )
}
