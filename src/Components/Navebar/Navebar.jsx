// import React from 'react'
import './Navebar.css'
import menu_icom from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import Search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

// eslint-disable-next-line react/prop-types
const Navebar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu_icom' onClick={()=>setSidebar(prev => prev===false?true:false)} src={menu_icom} alt="" />
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search'/>
          <img src={Search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div"> 
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className='user-icon'/>
      </div>
    </nav>
  )
}

export default Navebar
