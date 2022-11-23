import React from 'react'
import './AfterLoginHeader.css';

const AfterLoginHeader = () => {
  return (
    <nav className="nav-container">
    <div id="header">laundry</div>
    <div className="nav-links">
      <ul className="nav-links nav-static">
                <li>Pricing</li>
                <li>Career</li>
     </ul>
     <div className="nav-static1">
        <span className="text-align">UserName</span>
     </div >

     <div className="nav-static1"  id="hide">Logout </div>
    </div>
    
    
   
  </nav>
  )
}

export default AfterLoginHeader