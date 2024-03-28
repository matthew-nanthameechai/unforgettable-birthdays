// import { useState } from 'react'
import { Birthday } from '../../models/birthday'
import { Link } from 'react-router-dom'

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
          <>
            <p key={birthday.id}>
              Name: {birthday.name} - {birthday.day}/{birthday.month}
            </p>
          </>
        )
      })}
      <Link to="/form">Add your own birthday</Link>
    </>
  )
}

export default BirthdayList
