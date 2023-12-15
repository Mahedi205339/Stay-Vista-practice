import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import RoomDetails from '../components/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element:<DashboardLayout></DashboardLayout>,

  }
])
