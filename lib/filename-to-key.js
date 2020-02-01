const path = require('path')
const { escapeRegExp } = require('lodash')

// slash at the beginning of a filename
const pathSeparator = new RegExp(escapeRegExp(path.sep), 'g')

// all slashes in the filename. path.sep is OS agnostic (windows, mac, etc)
const leadingPathSeparator = new RegExp(`^${escapeRegExp(path.sep)}`)

// handle MS Windows style double-backslashed filenames
const windowsSeparator = new RegExp('\\\\', 'g')

const windowsPosixSeparator = new RegExp('/', 'g')

// derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
module.exports = function filenameToKey (filename) {
  const extension = new RegExp(`${path.extname(filename)}$`)
  const key = filename
    .replace(extension, '')
    .replace(leadingPathSeparator, '')
    .replace(windowsSeparator, '.')
    .replace(windowsPosixSeparator, '.')
    .replace(pathSeparator, '.')

  return key
}
