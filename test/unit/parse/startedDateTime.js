import test from 'ava'
import startedDateTime from 'parse/startedDateTime'

test('parses ISO date/time', (t) => {
  const result = '2020-06-17T12:35:17.658Z'

  const spec = startedDateTime(result)
  t.deepEqual(spec, new Date(Date.UTC(2020, 5, 17, 12, 35, 17, 658)))
})
