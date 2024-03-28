import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <h1 className="title">Unforgettable Birthdays</h1>
      <Link className="nav" to="/">
        Home
      </Link>
      <Outlet />
    </>
  )
}
