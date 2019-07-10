import { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import get from 'lodash/get'

export default class Filer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: get(props, 'filters.fulltext_search', ''),
    }
  }

  onChange = ({ nativeEvent, target }) => {
    this.setState({ value: target.value })
  }

  onBlur = () => {
    this.props.handleSearch(this.state.value)
  }


  onKeyPress = (event) => {
    switch (event.keyCode) {
      case 13:
        return this.props.handleSearch(event.target.value)
      default:
    }
  }

  render() {
    const { placeholder } = this.props
    return (
      <div className="data_table_search">
        <TextField
          label={placeholder}
          type="search"
          margin="normal"
          fullWidth
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.state.value}
          onKeyUp={this.onKeyPress}
        />
      </div>
    )
  }
}
