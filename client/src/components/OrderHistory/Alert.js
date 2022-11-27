import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { BsXLg } from "react-icons/bs";
import './Alert.css';



const Alert = ({ alertState, presentState, orderid, orderData, order_id }) => {

  const navigate = useNavigate();
  console.log("OrderID" , orderid);
  console.log("Order_Id", order_id);
  const [show, setShow] = useState(false);
  const [id, setOrder_ID] = useState();
  const[status, setStatus] = useState("Cancelled");
   const params = useParams();
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function handleUpdate() {
  setOrder_ID(order_id);
 console.log("ORDERID1111" , id);
  alertState(!presentState)
  setStatus("Cancelled");
  updateData({order_id},{status});
}



const updateData = async ({order_id},{status}) =>{


  console.log("Order ID ABC" , order_id);

  console.log("Status" , status);
  //
  const response = await axios.patch(`http://localhost:4000/${order_id}`,{
  body:{'status' : status},
  headers:{
    'Content-Type' : 'Applicaiton/json'
  }
  });
  if(response){
    window.location.reload();
 }
}
   function AlertComponent(){
    return <div className="alertcontainer">
   
    <div className="dialogbox">
              <div className="alertheader1">
                <div style={{ marginTop: 6, marginLeft: 15, color: "#FFFFFF" }}>
                  Alert
                </div>
                <div style={{marginRight: '2%', marginTop: '6px'}}>

                <BsXLg
                    color="#FFFFFF"
                    onClick={() => {
                      alertState(!presentState);
                    }}
                  />
                 
                </div>
              </div>
              <div className="alertbody">
                <div className="dangericon">
                  <img
                    src={'./images/alert.png'}
                    alt="dangerlogo"
                    className="redlogo"
                    style={{
                      width: 40,
                      marginTop: 30,
                      marginLeft: 20,
                      height: "50px",
                    }}
                  />
                </div>
                <div className="messagebox">
                  <p>
                    Are you sure want to cancel the Order
                    <span style={{ color: "#5861AE" }}>
                      {" "}
                      No: {orderid}
                    </span>
                  </p>
                </div>
              </div>
              <button className="vbutton"    onClick={handleUpdate}>
                Proceed
              </button>
            </div>
          </div>
   }
  return (
    <div className="alertcontainer">
<Modal show={handleShow} onHide={handleClose}  size="sm"  className='modal-dialog'>
  <AlertComponent />
  </Modal>
        {/* <div className="dialogbox">
          <div className="alertheader1">
            <div style={{ marginTop: 6, marginLeft: 15, color: "#FFFFFF" }}>
              Alert
            </div>
            <div style={{ marginTop: 6, marginRight: "10px" }}>
              {" "}
              <BsXLg
                color="#FFFFFF"
                onClick={() => {
                  alertState(!presentState);
                }}
              />
            </div>
          </div>
          <div className="alertbody">
            <div className="dangericon">
              <img
                src={'./images/alert.png'}
                alt="dangerlogo"
                className="redlogo"
                style={{
                  width: 38,
                  marginTop: 30,
                  marginLeft: 20,
                  height: "50px",
                }}
              />
            </div>
            <div className="messagebox">
              <p className="messageline">
                Are you sure want to cancel the Order
                <span style={{ color: "#5861AE" }}>
                  {" "}
                  No: {orderid}
                </span>
              </p>
            </div>
          </div>
          <button className="vbutton" onClick={() => alertState(!presentState)}>
            Proceed
          </button>
        </div> */}
      </div>
  )
}

export default Alert