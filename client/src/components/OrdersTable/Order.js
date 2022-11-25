import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import {BsEye} from 'react-icons/bs';
import Alert from '../OrderHistory/Alert';



const Order = ({data, alertState,presentState}) => {
    const [orderID, setOrderID] = useState();
    const [isOpen, setIsOpen] = useState(false);
 

  
    function CancelOrderButton({alertState, presentState, data}){
        return <div style={{color:"red", cursor:"pointer"}}   onClick={() => {
            alertState(!presentState);
            setOrderID(data.orderId);
            setIsOpen(!isOpen);
          }}>Cancel Order</div>
      }

     
    
      

  return (
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

<td>{order.status ==="Ready to pickup" ? <CancelOrderButton  alertState={alertState} presentState={presentState} data={order}/> : "" }</td>

<td><BsEye style={{ backgroundColor: "white", cursor: "pointer" }} /></td>
</tr>
  ))} 
     
        </tbody>
        </Table>
        {presentState && (
    
          <Alert
            alertState={alertState}
            presentState={presentState}
            orderid={orderID}
          />
          
        )}
        </div>
 )

}

export default Order