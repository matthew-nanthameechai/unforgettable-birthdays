import { Router } from 'express'
import * as db from '../db/db.ts'

const router = Router()

// gets all birthdays
router.get('/', async (req, res) => {
  try {
    const birthdays = await db.getAllBirthdays()
    res.json(birthdays)
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` })
  }
})

// adds a new birthday
router.post('/post', async (req, res) => {
  try {
    const birthday = req.body
    await db.addBirthday(birthday)
    res.sendStatus(200).json({ message: `Data was succesfully sent` })
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` })
  }
})

// finds birthday by name
router.get('/:name', async (req, res) => {
  try {
    const search = req.params.name
    const birthdays = await db.findBirthdayByName(search)
    // console.log(birthdays)
    if (birthdays.length === 0) {
      res.status(404).json({ message: `User does not exist` })
      return
    }
    res.json(birthdays)
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` })
  }
})

// deletes by id
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBirthdayById(id)
    res.sendStatus(200).json({ message: `Data was succesfully deleted` })
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` })
  }
})

export default router
