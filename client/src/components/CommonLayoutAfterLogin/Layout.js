import React from 'react'
import AfterLoginHeader from '../AfterLoginHeader/AfterLoginHeader';
import SideNav from '../SideNav/SideNav';
import Footer from '../Footer/Footer';
import './Layout.css';


const Layout = ({children}) => {
  return (
    <>
     <AfterLoginHeader />
     <div className='sidebar'>
        <div className='sidebarsec'>
        <SideNav />
        </div>
        <div className='othersec'>{children}</div>
     </div>
    
    
    
    <Footer />
    </>
   
    )
}

export default Layout