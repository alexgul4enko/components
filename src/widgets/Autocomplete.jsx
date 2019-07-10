import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import uuidv4 from 'uuid/v4'
import get from 'lodash/get'


export default class CustomAutocomplete extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
    this.id = uuidv4()
  }

  handleChange = (event, { newValue, method }) => {
    const value = this.props.getSuggestionValue(newValue)
    switch (method) {
      case 'up':
      case 'down':
        this.setState({ value })
        return this.selectedObject = newValue
      case 'enter':
      case 'click':
        this.setState({ value: '' })
        this.props.onSelect && this.props.onSelect(newValue)
        return this.selectedObject = undefined
      default:
        if(this.selectedObject) {
          this.props.onSelect && this.props.onSelect(this.selectedObject)
          this.setState({ value: '' })
          this.selectedObject = undefined
        }
        this.setState({ value: newValue })
        return this.selectedObject = undefined
    }
  }

  handleKeyPress = (event) => {
    switch (event.keyCode) {
      case 27:
        event.stopPropagation()
        event.preventDefault()
        this.setState({ value: '' })
        this.selectedObject = undefined
        return this.props.onSelect && this.props.onSelect({})
      default:
    }
  }


  renderSuggestion = (item, { isHighlighted, query }) => {
    const { renderItem, passQeury } = this.props
    const props = {
      item,
      ...(passQeury ? { query } : {}),
    }
    return (
      <MenuItem selected={isHighlighted} component="div" className="autocomplite_item">
        {renderItem(props)}
      </MenuItem>
    )
  }

  onSuggestionsFetchRequested = ({ value, reason }) => {
    const { fetch, limit, searchKey } = this.props
    if(!fetch) { return }
    switch (reason) {
      case 'input-changed':
        return fetch({ [searchKey]: value, offset: 0, limit }, { dataFunction: 'replace' })
      case 'input-focused':
      case 'escape-pressed':
      case 'suggestions-revealed':
      case 'suggestion-selected':
      default:
    }
  }

  onSuggestionsClearRequested = () => {
    this.props.setData && this.props.setData(undefined, { dataFunction: 'replace' })
  }

  renderSectionTitle = () => {

  }

  renderInputComponent = ({ inputRef = () => {}, ref, ...other }) => (
    <Input
      fullWidth
      inputRef= {node => { ref(node); inputRef(node) }}
      {...other}
    />
  )

  renderSuggestionsContainer = (options) => (
    <Paper {...options.containerProps} square className ={`${get(options, 'containerProps.className', '')} custom_autocomplite`}>
      {options.children}
    </Paper>
  )

  render() {
    const {
      suggestions,
      getSuggestionValue,
      onSuggestionHighlighted,
      alwaysRenderSuggestions,
      highlightFirstSuggestion,
      focusInputOnSuggestionClick,
      getSectionSuggestions,
      shouldRenderSuggestions,
      multiSection,
      renderItem,
      passQeury,
      fetch,
      searchKey,
      limit,
      setData,
      onSelect,
      close,
      ..._inputProps
    } = this.props
    const { value } = this.state

    const inputProps = {
      ..._inputProps,
      value,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyPress,
    }
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={(data, event) => data}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onSuggestionHighlighted={onSuggestionHighlighted}
        shouldRenderSuggestions={shouldRenderSuggestions}
        alwaysRenderSuggestions={alwaysRenderSuggestions}
        highlightFirstSuggestion={highlightFirstSuggestion}
        focusInputOnSuggestionClick={focusInputOnSuggestionClick}
        multiSection={multiSection}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        renderInputComponent={this.renderInputComponent}
        id={this.id}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
      />
    )
  }
}


CustomAutocomplete.propTypes = {
  getSuggestionValue: PropTypes.func,
  suggestions: PropTypes.array,
  shouldRenderSuggestions: PropTypes.func,
  alwaysRenderSuggestions: PropTypes.bool,
  highlightFirstSuggestion: PropTypes.bool,
  focusInputOnSuggestionClick: PropTypes.bool,
  multiSection: PropTypes.bool,
  getSectionSuggestions: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  passQeury: PropTypes.bool,
}

CustomAutocomplete.defaultProps = {
  getSuggestionValue: (item) => item,
  suggestions: [],
  shouldRenderSuggestions: (value) => !!value,
  passQeury: false,
}
