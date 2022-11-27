import React, {useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {BsEye} from 'react-icons/bs';
import Alert from '../OrderHistory/Alert';
import Summary  from '../Summary/Summary';



const Order = ({data, alertState,presentState, orderSummary, setOrderSummary}) => {
    const [orderID, setOrderID] = useState();
    const [orderData, setOrderData] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [clickOrder,setClickOrder] = useState();
    const [order_id, setOrderID1] = useState();
 

  
    function CancelOrderButton({alertState, presentState, data}){
        return <div style={{color:"red", cursor:"pointer"}}   onClick={() => {
           setOrderSummary(!orderSummary);
            // alertState(!presentState);
            setOrderID(data.orderId);
            setOrderData(data);
            // setIsOpen(!isOpen);
            setClickOrder("cancel");
            setOrderID1(data._id);
          }}>Cancel Order</div>
      }

      // const handleView = ({order}) => {
      //   setOrderSummary(!orderSummary);
       
      // };
    
      

  return (
    <>
    <div>
        <Table className ='striped bordered hover table-style' >
        <thead className='table-header-style' style={{verticalAlign:"middle"}}>
          <tr>
            <th>Order Id</th>
            <th >Order Date & Time</th>
            <th>Store Location</th>
            <th>City</th>
            <th>Store Phone</th>
            <th>Total Items</th>
            <th>Price</th>
            <th colSpan={2}>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody className='table-row-style' style={{verticalAlign:"middle"}}>
        
         
         {data.map((order,i)=>( 
            

<tr>
<td>{order.orderId}</td>
<td>{order.orderDateTime}</td>
<td>{order.storeLocation}</td>
<td>{order.city}</td>
<td>+91 {order.storePhone}</td>
<td>{order.totalItems}</td>
<td className='row-price'>{order.price} Rs</td>
<td>{order.status}</td>

<td>{order.status ==="Ready to pickup" ? <CancelOrderButton toggleState={setOrderSummary}
            currentState={orderSummary} alertState={alertState} presentState={presentState} data={order} clickOrder = {clickOrder} order_id={order_id}/> : "" }</td>

<td><BsEye style={{ backgroundColor: "white", cursor: "pointer" }} onClick={() => {
            setOrderSummary(!orderSummary);
            setOrderData(order);
            setClickOrder("view");
            setOrderID1(data._id);
           
          }} /></td>
</tr>
  ))} 
     
        </tbody>
        </Table>
        </div>
        <div>
        {orderSummary && (
          <Summary
            toggleState={setOrderSummary}
            currentState={orderSummary}
            orderID = {orderID}
        
            orderData={orderData}
            presentState={presentState}
            alertState={alertState}
            clickOrder = {clickOrder}
            order_id={order_id}

           
          />
        )} 
        </div>
        <div>
        {presentState && (
    
          <Alert
            alertState={alertState}
            presentState={presentState}
            orderid={orderID}
            orderData = {orderData}
            order_id={order_id}
           
          />
          
        )}
        </div>
       
        </>
 )

}

export default Order