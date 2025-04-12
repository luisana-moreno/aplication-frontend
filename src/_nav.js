import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilSpeedometer,
  cilPeople,
  cilAnimal,
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
  icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
},

{
  component: CNavGroup,
  name: 'Employee Management',
  items: [
    {
     component: CNavItem,
     name: 'Employee',
     to: '/employee',
     icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
  }
]
},

{
  component: CNavGroup,
  name: 'Client Management',
  items: [
    {
     component: CNavItem,
     name: 'Client',
     to: '/client',
     icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
  }
]
},
  {
    component: CNavGroup,
    name: 'Livestock contol',
    items: [
      {
       component: CNavItem,
       name: 'Cattle',
       to: '/cattle',
       icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
    }
  ]
  },
  {
    component: CNavGroup,
    name: 'Inventory Management',
    items: [
      {
       component: CNavItem,
       name: 'Inventory',
       to: '/inventory',
       icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
    }
  ]
  },
  {
    component: CNavGroup,
    name: 'Finance Management',
    items: [
      {
       component: CNavItem,
       name: 'Finance',
       to: '/finance',
       icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />
    }
  ]
  },


]

export default _nav
