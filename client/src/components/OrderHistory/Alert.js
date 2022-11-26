import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { BsXLg } from "react-icons/bs";
import './Alert.css';



const Alert = ({ alertState, presentState, orderid }) => {

  console.log("OrderID" , orderid);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
              <button className="vbutton" onClick={() => alertState(!presentState)}>
                Proceed
              </button>
            </div>
          </div>
   }
  return (
    <div className="alertcontainer">
<Modal show={handleShow} onHide={handleClose}  size="sm"  ClassName='modal-dialog'>
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