import {createBrowserRouter} from 'react-router-dom'
import { BaseTemplate } from '../templates/base'
import { lazy } from 'react'
const Home = lazy(() => import( '../pages/home'))
const Card = lazy(() => import( '../pages/carts'))
const Detail = lazy(() => import( '../pages/detail'))
const Login  = lazy(() => import( '../pages/login')) 
const Profile = lazy(() => import( '../pages/profile'))
const Register = lazy(() => import(  '../pages/register'))

export const router = createBrowserRouter([
    {
        element: <BaseTemplate/>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home/>
            },
            {
                path:'carts',
                element: <Card/>
            },
            {
                path: 'detail/:productID',
                element: <Detail/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])