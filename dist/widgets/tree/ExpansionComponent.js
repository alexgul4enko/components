"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpansionComponent;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _get = _interopRequireDefault(require("lodash/get"));

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ExpansionComponent(props) {
  var active = props.active,
      children = props.children,
      renderItem = props.renderItem,
      handleChange = props.handleChange,
      canBeToggled = props.canBeToggled;
  return React.createElement(_ExpansionPanel["default"], {
    className: "custom_tree",
    expanded: active,
    onChange: handleChange(props),
    classes: {
      expanded: 'active',
      disabled: 'disabled'
    },
    disabled: !canBeToggled
  }, React.createElement(_ExpansionPanelSummary["default"], {
    className: "tree_title",
    expandIcon: React.createElement(_Icon["default"], {
      name: "keyboard_arrow_down ".concat(!canBeToggled && 'disabled')
    })
  }, renderItem(props)), children && React.createElement(_ExpansionPanelDetails["default"], {
    className: "tree_data"
  }, children));
}