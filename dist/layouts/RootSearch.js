"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _hocs = require("../hocs");

var _widgets = require("../widgets");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _RootSeachItem = _interopRequireDefault(require("./RootSeachItem"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createSuggestions(_ref) {
  var search = _ref.search;
  return [{
    title: 'in People',
    to: '',
    uuid: 'people',
    search: search
  }, {
    title: 'in Teams',
    to: '',
    uuid: 'teams',
    search: search
  }, {
    title: 'in Content',
    to: '',
    uuid: 'content',
    search: search
  }, {
    title: 'in Locations',
    to: '',
    uuid: 'locations',
    search: search
  }];
}

function RootSearch(_ref2) {
  var active = _ref2.active,
      toggle = _ref2.toggle,
      locations = _ref2.locations,
      setToggle = _ref2.setToggle;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      suggestions = _useState2[0],
      setSuggestions = _useState2[1];

  return React.createElement("div", {
    className: "site_search_container"
  }, React.createElement(_IconButton["default"], {
    onClick: function onClick() {
      return setToggle(true);
    },
    className: "header_button search-button ".concat(active ? 'active' : '', " headerButton header_links")
  }, React.createElement(_widgets.Icon, {
    name: "search"
  })), React.createElement(_Popper["default"], {
    open: active,
    transition: true,
    disablePortal: true,
    className: "search_menu ".concat(active ? 'active' : '')
  }, function (_ref3) {
    var _React$createElement;

    var TransitionProps = _ref3.TransitionProps,
        placement = _ref3.placement;
    return React.createElement(_Grow["default"], _extends({}, TransitionProps, {
      id: "menu-list-grow",
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), React.createElement(_ClickAwayListener["default"], {
      onClickAway: function onClickAway(event) {
        event && event.stopPropagation();
        event && event.preventDefault();
        setToggle(false);
      }
    }, React.createElement("div", {
      className: "search_menu_container"
    }, React.createElement(_widgets.Autocomplete, (_React$createElement = {
      suggestions: suggestions,
      autoFocus: active,
      disableUnderline: true,
      fullWidth: true,
      placeholder: "Search...",
      startAdornment: React.createElement(_InputAdornment["default"], {
        position: "start"
      }, React.createElement(_widgets.Icon, {
        name: "search",
        size: 32,
        color: "#656565"
      })),
      highlightFirstSuggestion: true,
      focusInputOnSuggestionClick: false,
      fetch: function fetch(data) {
        return setSuggestions(createSuggestions(data));
      },
      setData: function setData() {
        return setSuggestions([]);
      },
      renderItem: _RootSeachItem["default"],
      searchKey: "search",
      getSuggestionValue: function getSuggestionValue(data, event) {
        return (0, _get["default"])(data, 'title', '');
      },
      close: function close() {
        return setToggle(false);
      }
    }, _defineProperty(_React$createElement, "focusInputOnSuggestionClick", true), _defineProperty(_React$createElement, "alwaysRenderSuggestions", true), _defineProperty(_React$createElement, "onSelect", function onSelect(selected) {
      setToggle(false);
      console.log({
        selected: selected
      });
      /* TODO: add navigation event */
    }), _React$createElement)), React.createElement(_IconButton["default"], {
      onClick: function onClick() {
        return setToggle(false);
      },
      className: "header_button search-button ".concat(active ? 'active' : '', " headerButton")
    }, React.createElement(_widgets.Icon, {
      name: "clear",
      size: 32
    })))));
  }));
}

var _default = (0, _hocs.withModal)(RootSearch);

exports["default"] = _default;