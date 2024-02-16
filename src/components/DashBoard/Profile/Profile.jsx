import React from 'react'
import './Profile.css'
import User from './Userassests/footerImg.jpg'
import flag from './Userassests/download.png'



const Profile = () => {
  return (
    <div className='profile-section'>
      <div className="profile-top-bar">
        <div className="icon">
        <i class="fa-solid fa-bell"></i>
        </div>
        <div className="country-flag">
          <img src={flag} alt="" className='flag-img'/>
        </div>
      <h6 className="language">
        
        NEP  <i
            class="fa-solid fa-plus"
           
          ></i></h6>
      </div>

      <div className="user-info">
      <div className="card" id='profile-item' style={{width: '18rem'}}>
        <img src={User} className="card-img-top" id='profile-img' alt="..." />
        <div className="card-body">
          <p className="card-text" id='card-items'><b>SANDESH BK</b></p>
          <p className='card-text' id='card-items'>Developer</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile