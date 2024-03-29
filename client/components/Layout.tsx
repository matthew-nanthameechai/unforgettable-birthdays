import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='top-container'>
      <h1 className="title">Unforgettable Birthdays</h1>
      <Link className="nav" to="/">
        Home
      </Link>
      <Link to="/form">Add your own birthday</Link>
      <Outlet />
    </div>
      
    </>
  )
}
