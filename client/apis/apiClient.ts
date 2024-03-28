import request from 'superagent'
import { Birthday } from '../../models/birthday'

const rootUrl = '/api/v1/birthdays'

export function getBirthDays(): Promise<Birthday[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
