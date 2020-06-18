const header = require('./header')
const logic = require('./logic')

function entry(spec, prevSpec) {
  return [header(spec, prevSpec), logic(spec, prevSpec)]
    .filter((item) => item)
    .join(`\n`)
}

module.exports = entry
