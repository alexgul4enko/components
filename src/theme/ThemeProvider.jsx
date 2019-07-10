import { createContext, Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import get from 'lodash/get'
import has from 'lodash/has'
import connect from '../../utils/resource'

const ThemeContext = createContext({ branding: {} })

class Theme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: createMuiTheme({
        palette: {
          primary: { main: '#28a745' },
          secondary: { main: '#11cb5f' },
        },
        typography: { useNextVariants: true },
      }),
    }
  }

  componentDidMount() {
    this.props.branding.fetch()
      .then(this.createTheme)
  }

  createTheme = (data) => {
    const {
      link_colour = '#28a745',
      mobile_icons_colour,
      navigation_first_level_nav_link,
      navigation_menu_background_colour,
      primary_button_normal_state_border_colour,
      primary_button_normal_state_colour,
      standard_button_normal_state_border_colour,
      standard_button_normal_state_colour,
      toolbar_background_colour,
      toolbar_text_colour,
      vertical_tabs_colour,
    } = data

    const theme = createMuiTheme({
      palette: {
        primary: { main: link_colour },
        secondary: { main: '#11cb5f' },
      },
      typography: { useNextVariants: true },
    })
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeContext.Provider value={{ branding: this.props.branding.data }}>
        <MuiThemeProvider theme={this.state.theme}>
          {this.props.children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    )
  }
}

export default function withStyles(ChildComponent) {
  return function stylesWrapped(props = {}) {
    return (
      <ThemeContext.Consumer>
        {({ branding }) => (<ChildComponent branding={branding} {...props} />)}
      </ThemeContext.Consumer>
    )
  }
}

const ThemeProvider = connect(['branding'])(Theme)
const Consumer = ThemeContext.Consumer
export {
  ThemeProvider,
  Consumer,
}
