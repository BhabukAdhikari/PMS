import React from 'react'
import './Dash-css/Topbar.css'
import download from './Dash-assests/download.png'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div>
          <nav className="navbar" id='top-bar'>
        <div className="container-fluid">
          <Link className="navbar-brand" id='top-item-container' href="#">
            <img src={download} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" id='top-img-container' />
            NEP <i class="fa-solid fa-plus" style={{
                color: "#341C69",
            }}></i>
          </Link>
          <i className="fa-regular fa-bell" id='bell-icon'></i>
        </div>
      </nav>
    </div>
  )
}

export default Topbar