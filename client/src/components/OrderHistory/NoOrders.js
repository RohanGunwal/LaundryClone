import React from 'react'

import './NoOrders.css'

const NoOrders = ({ sizes }) => {
    sizes = 10;

    function NoOrders(){
        return  <div className="newcreatebotton">
        <p className='newpara1'>No Orders available</p>
        <button className='scnbotton' >Create</button> 
        </div>
    }

    function CreateButton(){
        return  <div className="newcreatebotton1">
        <button className='scnbotton1' >Create</button> 
        </div>
    }


    function OrderHeader(){
       return <div className="orderheader">
        <span className="oh1">Order Id</span>

        <span className="oh2">Order Date & Time</span>
        <span className="oh3">Store Location</span>
        <span className="oh4">City</span>

        <span className="oh5">Store Phone</span>
        <span className="oh6">Total Items</span>
        <span className="oh7">Price</span>
        <span className="oh8">Status</span>
        <span className="oh9">View</span>
      </div>
    }
    return (
        <>
        <div className="empty-container">
            <div className="socbar">
                <div className='socline'>  Orders | {sizes} </div>
                {sizes ===0 ? "": <CreateButton />}
                <div className='socbox'><img src={'/images/search.svg'} alt="search" className="soimglogo" style={{ color: "#1D377E" }} /></div>
            </div>
        </div>
        {sizes ===0 ? <NoOrders /> :<OrderHeader />}
       
        
         </>
    )
}

export default NoOrders