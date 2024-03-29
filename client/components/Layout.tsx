import { Outlet, Link } from 'react-router-dom'
import EasterEggSound from '../../audio/easteregg.mp3'

export default function Layout() {
  const buttons = document.querySelectorAll('button')
  const audio = new Audio(EasterEggSound)
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      audio.play()
    })
  })
  return (
    <>
      <h1 className="title">Unforgettable Birthdays</h1>
      <button>
        <Link className="nav" to="/">
          Home
        </Link>
      </button>
      <Outlet />
    </>
  )
}
