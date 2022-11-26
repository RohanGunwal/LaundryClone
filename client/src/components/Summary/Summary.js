import React, {useState} from 'react'
import {useLocation} from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import './Summary.css';
import { Collapse } from 'bootstrap';

const Summary = ({currentState,toggleState,orderData, orderID, alertState,presentState, clickOrder}) => {
    console.log(orderData);
    const [show, setShow] = useState(false);
    const [orderID1, setOrderID] = useState();
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    console.log("pathname" ,location.pathname);
    console.log("Products" ,orderData.products);

   


    function OrderDetailsComponet({prod}){
      return <tr>
        <td className="productname">{prod.productType}</td>
        <td className='productWashType'>{prod.washType.join(',')}</td>
        <td className='productqdetails'>{prod.quantity +  'X' +  (prod.price)/(prod.quantity) + "="}</td>
        <td className='productquantity' colSpan={2}>{prod.price}</td>
      </tr>

 
    }

    
    function OrderDetailsFooterComponet({data1}){
        console.log(data1)
        return <><tr>
          <td colSpan={3} className='subTotal'>Sub total:</td>
          <td className='productquantity1'>{Number(orderData.price) - 90}</td>
        </tr>
        <tr>
        <td colSpan={3} className='subTotal'>Pickup Charges:</td>
        <td className='productquantity1'>{90}</td>
      
      </tr>
      <tr className='footer_final_row'>
      <td colSpan={3} className='footer_final'>Total:</td>
          <td className='productquantity2'>Rs {orderData.price}</td>
      </tr>
      </>
      }


    function SummaryComponent(){
        return <><div className="hnsummary">
        <p style={{ marginLeft: 10, color: "#FFFFFF", marginTop :"15px" }}>Summary</p>
        <div
          className="canceln"
          style={{ marginTop: 15, marginRight: "10px" }}
        >
          <BsXLg
            color="#FFFFFF"
            onClick={() => {
              toggleState(!currentState);
            }}
          />
        </div>
      </div>
   
  
      <div className="storelocdetails">
        <div className="sloaction">
          <p className="specialhe">Store Location</p>
          <p className="specialhe2">{orderData.storeLocation}</p>
        </div>
        <div className="sloaction">
          <p className="specialhe">Store Address:</p>
          <p className="specialhe2">Near Phone booth, 10th road,</p>
        </div>
        <div className="sloaction">
          <p className="specialhe">Phone</p>
          <p className="specialhe2">+91 {orderData.storePhone}</p>
        </div>
      </div>
      <div className="osummarystatus"></div>
  
      <div className="ordersummarystatus">
        <p className="ohd">Order Detalis</p>
        <Table className ='striped bordered hover table-style' style={{marginLeft:40, fontWeight:300}}>
        <tbody className='table-row-style' style={{verticalAlign:"middle"}}>
        {orderData.products.map((prod,i)=>(
             
         <OrderDetailsComponet prod ={prod} ></OrderDetailsComponet>
         
      ))}
      </tbody>
      <tfoot>
        <OrderDetailsFooterComponet orderData={orderData} />
      </tfoot>
         </Table>
     
      </div>

      <div className="ordersummarystatus">
      <p className="ohd">Address</p>
        
      </div>
  
      {/* <p className="iline">Address</p> */}
      <div className="nsummaryaddress">
        <p className='addresshome'>Home</p>
        <div className='address1' >#223, 10th road, Jp Nagar, Bangalore</div>
       
      </div>
       {clickOrder === 'cancel' ? <CancelOrderButtonComponent /> : ""} 
      </>
    }

    function CancelOrderButtonComponent(){
        return   <div className="scbutton">
        <button
          className="csumary"
          onClick={() => {
            toggleState(!currentState);
            alertState(!presentState);
            setOrderID(orderID);
         
           
          }}
        >
          Cancel order
        </button>
      </div>
    }

  return (
    <div className="nsummary_content">
        {/* <Modal show={handleShow} onHide={handleClose}    dialogClassName='modal-dialog' > */}
  <SummaryComponent />
  {/* </Modal> */}

    
    
  </div>
  )
}

export default Summary