import React from 'react'
// import Navbar from '../Landingpage/Navbar/Navbar'
import Dashboard from '../DashBoard/Dashboard'

const Default = ({children}) => {
  return (
    <div><Dashboard />{children}</div>
  )
}

export default Default