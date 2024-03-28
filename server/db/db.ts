import connection from './connection.ts'
import { Birthday, BirthdayData } from '../../models/birthday.ts'

const db = connection

// Get all Birthdays
export async function getAllBirthdays(): Promise<Birthday[]> {
  return db('birthdays').select()
}

// add
export async function addBirthday(
  birthday: BirthdayData,
): Promise<BirthdayData[]> {
  return db('birthdays').insert(birthday)
}

// update
export async function updateBirthday(
  id: number,
  birthday: Birthday,
): Promise<Birthday[]> {
  return db('birthdays').select()
}

// delete
export async function deleteBirthdayById(id: number): Promise<Birthday[]> {
  return db('birthdays').select().where({ id }).delete()
}

// search
export async function findBirthdayByName(search: string): Promise<Birthday[]> {
  return db('birthdays').select().whereLike(`name`, `%${search}%`)
}
