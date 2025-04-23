import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilContact,
  cilSpeedometer,
  cilPeople,
  cilAnimal,                  
  cilCalendar,
  cilUserFollow,
  cilClipboard,
  cilChart,
  cilTask,
  cilAddressBook,
  cibCodesandbox,
  cilCash
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text:'NEW',
    },
  },
//creado
{
  component: CNavTitle,
  name: 'Modules',
},
{
  component: CNavItem,
  name: 'Users',
  to: '/users',
  icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
},

{
  component: CNavGroup,
  name: 'Employee Management',
  icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Register Employee',
      to: '/employee',
      icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />
  }
]
},

{
  component: CNavGroup,
  name: 'Client Management',
  icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Register Client',
      to: '/client',
      icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />
  }
]
},
  {
    component: CNavGroup,
    name: 'Livestock contol',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Register Cattle',
        to: '/cattle',
        icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
    },
    {
      component: CNavItem,
      name: 'Vaccination Plan',
      to: '/vaccination',
      icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />
    }
  ]
  },
  {
    component: CNavGroup,
    name: 'Inventory Management',
    icon: <CIcon icon={cibCodesandbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Inventory',
        to: '/inventory',
        icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
    }
  ]
  },
  {
    component: CNavGroup,
    name: 'Finance Management',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,  
    items: [
      {
        component: CNavItem,
        name: 'Finance',
        to: '/finance',
        icon: <CIcon icon={cilCash} customClassName="nav-icon" />
    }
  ]
  },


]

export default _nav
