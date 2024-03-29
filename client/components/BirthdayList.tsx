// import { useState } from 'react'
// import { Birthday } from '../../models/birthday'
import { Link } from 'react-router-dom'
import { useGetBirthdays } from '../hooks/useBirthdays'
import EasterEggSound from '../../audio/easteregg.mp3'

// const birthdays = [
//   {
//     id: 1,
//     name: 'Alyssa',
//     month: 10,
//     day: 18,
//   },
//   {
//     id: 2,
//     name: 'Taua',
//     month: 3,
//     day: 19,
//   },
// ] as Birthday[]

function BirthdayList() {
  const { data: birthdays, isPending, isError, error } = useGetBirthdays()
  const buttons = document.querySelectorAll('button')
  const audio = new Audio(EasterEggSound)
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      audio.play()
    })
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
      <>
        {console.error(error)}
        <p>Fuck you this is an error</p>
      </>
    )
  }
  return (
    <>
      {birthdays?.map((birthday) => {
        return (
          <>
            <p key={birthday.id}>
              Name: {birthday.name} - {birthday.day}/{birthday.month}
            </p>
          </>
        )
      })}
      <button>
        <Link to="/form">Add your own birthday</Link>
      </button>
    </>
  )
}

export default BirthdayList
