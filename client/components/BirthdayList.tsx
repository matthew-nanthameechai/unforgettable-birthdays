import { useState } from 'react'
import { Birthday } from '../../models/birthday'

const birthdays = [
  {
    id: 1,
    name: 'Alyssa',
    month: 10,
    day: 18,
  },
  {
    id: 2,
    name: 'Taua',
    month: 3,
    day: 19,
  },
] as Birthday[]

function BirthdayList() {
  return (
    <>
      {birthdays.map((birthday) => {
        return (
          <p key={birthday.id}>
            Name: {birthday.name} - {birthday.day}/{birthday.month}
          </p>
        )
      })}
    </>
  )
}

export default BirthdayList
