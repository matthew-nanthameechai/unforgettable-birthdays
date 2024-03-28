/* eslint-disable react/jsx-key */
import BirthdayForm from './components/BirthdayForm'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/form" element={<BirthdayForm />} />
      </Route>
    </>,
  ),
)
export default router
