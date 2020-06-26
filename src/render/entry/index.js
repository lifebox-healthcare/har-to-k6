const header = require('./header')
const logic = require('./logic')

const want = /^https:\/\/.*(lifeboxhealth\.com|amazonaws\.com)\/.*$/
let prevSpec = undefined

function entry(spec) {
  let address = spec.request.address
  // console.log(address)
  // console.log(want.test(address))
  if (!want.test(address)) {
    return null
  }

  let result = [header(spec, prevSpec), logic(spec, prevSpec)]
    .filter((item) => item)
    .join(`\n`)

  prevSpec = spec
  return result
}

module.exports = entry
