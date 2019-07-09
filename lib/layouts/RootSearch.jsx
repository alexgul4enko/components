import { useState } from 'react'
import { withModal } from '../hocs'
import { Autocomplete, Icon } from '../widgets'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import RootSeachItem from './RootSeachItem'
import get from 'lodash/get'

function createSuggestions({ search }) {
  return ([
    { title: 'in People', to: '', uuid: 'people', search: search },
    { title: 'in Teams', to: '', uuid: 'teams', search: search },
    { title: 'in Content', to: '', uuid: 'content', search: search },
    { title: 'in Locations', to: '', uuid: 'locations', search: search },
  ])
}

function RootSearch({ active, toggle, locations, setToggle }) {
  const [suggestions, setSuggestions] = useState([])
  return (
    <div className="site_search_container">
      <Button
        onClick={() => setToggle(true)}
        className={`header_button search-button ${active ? 'active' : ''} headerButton header_links`}
      >
        <Icon name="search" />
      </Button>
      <Popper open={active} transition disablePortal className={`search_menu ${active ? 'active' : ''}`}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <ClickAwayListener onClickAway={(event) => {
              event && event.stopPropagation()
              event && event.preventDefault()
              setToggle(false)
            }}>
              <div className="search_menu_container">
                <Autocomplete
                  suggestions={suggestions}
                  autoFocus={active}
                  disableUnderline
                  fullWidth
                  placeholder="Search..."
                  startAdornment={(<InputAdornment position="start"><Icon name="search" size={32} color="#656565"/></InputAdornment>)}
                  highlightFirstSuggestion
                  focusInputOnSuggestionClick={false}
                  fetch={(data) => setSuggestions(createSuggestions(data))}
                  setData={() => setSuggestions([]) }
                  renderItem={RootSeachItem}
                  searchKey="search"
                  getSuggestionValue={(data, event) => { return get(data, 'title', '') }}
                  close={() => setToggle(false)}
                  focusInputOnSuggestionClick
                  alwaysRenderSuggestions
                  onSelect={(selected) => { setToggle(false); console.log({ selected }) /* TODO: add navigation event */ }}
                />
                <Button
                  onClick={() => setToggle(false)}
                  className={`header_button search-button ${active ? 'active' : ''} headerButton`}
                >
                  <Icon name="clear" size={32}/>
                </Button>
              </div>
            </ClickAwayListener>
          </Grow>

        )}
      </Popper>
    </div>
  )
}

export default withModal(RootSearch)
