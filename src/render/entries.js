const entry = require('./entry')

function entries(items) {
  const expanded = !!items.find((item) => item.state.expanded)
  const separator = expanded ? `\n\n` : `\n`
  if (items.length) {
    let prevItem = undefined
    const sections = items.map((item) => {
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
