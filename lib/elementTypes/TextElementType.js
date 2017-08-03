'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextElementType;

var _he = require('he');

var _he2 = _interopRequireDefault(_he);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a text node to a React text element
 *
 * @param {Object} node The text node
 * @returns {String} The text
 */
function TextElementType(node) {

  // React will accept plain text for rendering so just return the node data
  node.data = _he2.default.decode(node.data);
  return node.data;
}