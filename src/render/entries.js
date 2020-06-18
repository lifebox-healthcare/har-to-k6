const entry = require('./entry')

function entries(items) {
  const expanded = !!items.find((item) => item.state.expanded)
  const separator = expanded ? `\n\n` : `\n`
  const want = /^https:\/\/.*(lifeboxhealth\.com|amazonaws\.com)\/.*$/
  if (items.length) {
    let prevItem = undefined
    const sections = items
      .filter((item) => {
        let address = item.request.address
        // console.log(address)
        // console.log(want.test(address))
        // console.log(address[0])
        return want.test(address)
      })
      .map((item) => {
        let result = entry(item, prevItem)
        prevItem = item
        return result
      })
    return sections.filter((item) => item).join(separator)
  } else {
    return null
  }
}

module.exports = entries
