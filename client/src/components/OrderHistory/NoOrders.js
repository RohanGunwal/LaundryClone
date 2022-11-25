import React,{useState, useEffect} from 'react'
import OrderHeader from '../OrdersTable/Order';
// import Table from 'react-bootstrap/Table';
// import {BsEye} from 'react-icons/bs';

import './NoOrders.css'

const NoOrders = () => {
//   const token = localStorage.getItem('token');
const [alert, setAlert] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(()=> {
     fetch("http://localhost:4000/orderList").then((res)=>res.json()).then((data)=> {
    setOrders(data.reverse());
    }).catch((err)=> {
        if(err) {
            console.log(err)
        }
    })

//     // fetch("https://my-instaclone-server.herokuapp.com/").then((res)=>res.json()).then((data)=> {
        
//     // setPosts(data.reverse());
//     // }).catch((err)=> {
//     //     if(err) {
//     //         console.log(err)
//     //     }
//     // })

//     // axios.get("https://my-instaclone-server.herokuapp.com/")
//     // .then((res) => {
//     //     setPosts(res.data.reverse())
//     // })

//     // const getData = async () => {
//     //     const response = await axios.get('http://localhost:5000/');

//     //     // const response = await axios.get("https://instaclone-chavva-api.herokuapp.com/post");
//     //     // console.log(data)
//     //     response.data.reverse()

//     //     setPosts(response.data);
//     //     // console.log(response.data)
//     // };
//     // getData();
}, []);
//var count = Object.keys(myObject).length;
   const sizes = orders.length;
   

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

    // function CancelOrderButton(){
    //   return <div style={{color:"red", cursor:"pointer"}}>Cancel Order</div>
    // }


//     function OrderHeader(){
//        return <div >
//         <Table className ='striped bordered hover table-style' >
//         <thead className='table-header-style' style={{verticalAlign:"middle"}}>
//           <tr>
//             <th>Order Id</th>
//             <th >Order Date & Time</th>
//             <th>Store Location</th>
//             <th>City</th>
//             <th>Store Phone</th>
//             <th>Total Items</th>
//             <th>Price</th>
//             <th colSpan={2}>Status</th>
//             <th>View</th>
//           </tr>
//         </thead>
//         <tbody className='table-row-style' style={{verticalAlign:"middle"}}>
//         {console.log("xys", orders)}
         
//          {orders.map((order)=>( 

// <tr>
// <td>{order.orderId}</td>
// <td>{order.orderDateTime}</td>
// <td>{order.storeLocation}</td>
// <td>{order.city}</td>
// <td>+91 {order.storePhone}</td>
// <td>{order.totalItems}</td>
// <td className='row-price'>{order.price} Rs</td>
// <td>{order.status}</td>
// <td>{order.status ==="Ready to pickup" ? <CancelOrderButton /> : "" }</td>

// <td><BsEye style={{ backgroundColor: "white", cursor: "pointer" }} /></td>
// </tr>
//   ))} 
     
//         </tbody>
//         </Table>
     
//       </div>
//     }
    return (
        <>
        <div className="empty-container">
            <div className="socbar">
                <div className='socline'>  Orders | {sizes} </div>
                {sizes ===0 ? "": <CreateButton />}
                <div className='socbox'><img src={'/images/search.svg'} alt="search" className="soimglogo" style={{ color: "#1D377E" }} /></div>
            </div>
        </div>
        {sizes ===0 ? <NoOrders /> :<OrderHeader data = {orders} alertState={setAlert} presentState={alert} />}
       
        
         </>
    )
}

export default NoOrders