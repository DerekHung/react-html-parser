'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextElementType;
/**
 * Converts a text node to a React text element
 *
 * @param {Object} node The text node
 * @returns {String} The text
 */
function TextElementType(node) {

  // React will accept plain text for rendering so just return the node data
  node.data = node.data.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  node.data = node.data.replace(/&nbsp;/g, ' ');
  node.data = node.data.replace(/&amp;/g, '&');
  return node.data;
}