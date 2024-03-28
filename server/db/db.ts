import connection from './connection.ts'
import { Birthday } from '../../models/birthday.ts'

const db = connection

export async function getAllBirthdays(): Promise<Birthday[]> {
  return db('birthdays').select()
}
