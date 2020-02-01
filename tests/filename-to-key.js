const filenameToKey = require('../lib/filename-to-key')

describe('filename-to-key', () => {
  test('converts filenames to object keys', () => {
    expect(filenameToKey('foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test('ignores leading slash on filenames', () => {
    expect(filenameToKey('/foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test.skip('supports MS Windows paths', () => {
    expect(filenameToKey('path\\to\\file.txt')).toBe('path.to.file')
  })
})