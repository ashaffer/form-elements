/**
 * Imports
 */

var controls = require('form-controls').join(',')
var toArray = require('to-array')

/**
 * Retrieve the list of form elements
 */

function elements (form) {
  return toArray(
    form.elements
      ? form.elements
      : form.querySelectorAll(controls)
  )
}

/**
 * Exports
 */

module.exports = elements