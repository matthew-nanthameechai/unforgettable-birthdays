import * as db from './db.ts'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection.ts'

beforeAll(() => {
  return connection.migrate.latest()
})
beforeEach(() => {
  return connection.seed.run()
})

// describe('functionName', () => {
//   it.todo('what the test should do', async () => {
//     // Write test here
//     // Arrange
//     // Act
//     // Assert
//   })
// })

describe('getAllBirthdays', () => {
  it('Should get all birthdays', async () => {
    // Arrange / Act
    const getAllBirthdays = await db.getAllBirthdays()

    // Assert
    expect(getAllBirthdays).toHaveLength(4)
    expect(getAllBirthdays[1].id).toBe(2)
  })
})

describe('deleteBirthdayById', () => {
  it('Should delete specific entry based on id', async () => {
    // Arrange
    await db.deleteBirthdayById(2)

    // Act
    const allBirthdays = await db.getAllBirthdays()

    // Assert
    expect(allBirthdays).toHaveLength(3)
  })
})

describe('addBirthday', () => {
  it('Should add birthday', async () => {
    // Arrange
    const birthday = { name: 'Boston', day: 3, month: 3 }
    await db.addBirthday(birthday)

    // Act
    const allBirthdays = await db.getAllBirthdays()

    // Assert
    expect(allBirthdays).toHaveLength(5)
  })
})

describe('updateBirthday', () => {
  it('Should update a birthday', async () => {
    // Arrange
    const birthday = { name: 'Matt', day: 10 }

    await db.updateBirthday(1, birthday)
    // Act
    const allBirthdays = await db.getAllBirthdays()
    // console.log(allBirthdays, '🐸🐸🐸')

    // Assert
    expect(allBirthdays[0].name).toBe('Matt')
    expect(allBirthdays[0].day).toBe(10)
  })
})

describe('findBirthdayByName', () => {
  it('Should find a certain entry by name', async () => {
    // Arrange
    const allBirthdays = await db.getAllBirthdays()
    const searchedBirthday = await db.findBirthdayByName('Matthew')

    // Act

    // Assert
    expect(searchedBirthday[0].name).toBe(allBirthdays[0].name)
    expect(searchedBirthday[0].day).toBe(allBirthdays[0].day)
    expect(searchedBirthday[0].month).toBe(allBirthdays[0].month)
  })
})

afterAll(() => {
  connection.destroy()
})
