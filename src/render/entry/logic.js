const checks = require('../checks')
const request = require('../request')
const variables = require('../variables')
const withSleep = require('../withSleep')

function logic(spec, prevSpec) {
  let flow = [
    request(spec.request),
    checks(spec.checks),
    variables(spec.variables),
  ]

  if (prevSpec) {
    withThinkTime(flow, spec, prevSpec)
  }

  if (spec.sleep) {
    flow = withSleep(flow, spec.sleep)
  }

  return flow.filter((item) => item).join(`\n`)
}

function withThinkTime(flow, spec, prevSpec) {
  if (prevSpec && prevSpec.startedDateTime && spec.startedDateTime) {
    let ms = spec.startedDateTime - prevSpec.startedDateTime
    const threshold = 2000
    if (ms > threshold) {
      let cmd = `sleep(${Math.round(ms / 1000)});`
      console.log(cmd)
      flow.unshift(cmd)
    }
  }
}

module.exports = logic
