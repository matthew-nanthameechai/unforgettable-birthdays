import { useCallback, useState } from 'react'

import { useAddBirthday } from '../hooks/useBirthdays'
import { useNavigate } from 'react-router-dom'

function BirthdayForm() {
  const [newName, setNewName] = useState('')
  const [newMonth, setNewMonth] = useState('')
  const [newDay, setNewDay] = useState('')
  
  const addBirthday = useAddBirthday()
  const navigate = useNavigate()

  const handleNameChange = (e: React.ChangeEvent) => {
    setNewName(e.target.value)
  }

  const handleDayChange = (e: React.ChangeEvent) => {
    setNewDay(e.target.value)
  }

  const handleMonthChange = (e: React.ChangeEvent) => {
    setNewMonth(e.target.value)
  }

  const day = Number(newDay)
  const month = Number(newMonth)

  const handleSubmit = useCallback( async (e: React.FormEvent) => {
    console.log(newName, month, day)
    e.preventDefault()
    addBirthday.mutate({ name: newName, day, month })
    setNewName('')
    setNewDay('')
    setNewMonth('')
    navigate('/')
  }, [addBirthday, day, month, navigate, newName])

  return (
    <>
      <h2>Add your Birthday</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={newName}
            name=""
            id="name"
            placeholder="name"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="day">Day: </label>
          <input
            value={newDay}
            name="day"
            id="day"
            placeholder="1"
            onChange={handleDayChange}
          />
        </div>
        <div>
          <label htmlFor="month">Month: </label>
          <input
            value={newMonth}
            name="month"
            id="month"
            placeholder="1"
            onChange={handleMonthChange}
          />
        </div>
        <button>Submit</button>
      </form>
    
    </>
  )
}

export default BirthdayForm

