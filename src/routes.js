import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Employee = React.lazy(()=> import('./views/pages/employees/employees'))
const Users = React.lazy(() => import('./views/pages/users/users.js'))
const Cattle = React.lazy(() => import('./views/pages/cattle/cattle'))
const Vaccination = React.lazy(() => import('./views/pages/cattle/vaccination'))
const Client = React.lazy(() => import('./views/pages/client/client'))
const Finance = React.lazy(() => import('./views/pages/finance/finance'))
const Inventory = React.lazy(() => import('./views/pages/inventory/inventory'))
const Login = React.lazy(() => import('./views/pages/login/Login'))


const routes = [
  { path: '/', exact: true, name: 'login', element: Login },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  //agregado
  { path: '/employee', name: 'Employee', element: Employee},  
  { path: '/users', name: 'users' , element: Users},
  { path: '/cattle', name: 'cattle', element: Cattle},
  { path: '/vaccination', name: 'vaccination', element: Vaccination},
  { path: '/client', name: 'client', element: Client},
  { path: '/finance', name: 'finance', element: Finance},
  { path: '/inventory', name: 'inventory', element: Inventory},

]
export default routes
