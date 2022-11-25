import {orderList} from "./orderObject"
import React, { useState } from "react"
import "./createOrder.css"
export default function CreateOrder(){
    const [orders,setOrders]= useState(new Map())
    const [price,setPrice] = useState(new Map())
    const [washType,getWashType] = useState({quantity:"",machineWash:"",iron:"",dry:"",chemical:"",id:"",count:0})
    // const [quantity,setQuantity]=useState({1:"",2:"",3:"",4:"",5:"",6:""})
    const [reset,setReset]=useState(false)
   
function getMachineWash(e,itemId){
    const temp = washType
    temp.machineWash = e.target.alt
    temp.id=itemId
    temp.clouth = e.target.id;
    temp.count = temp.count + 1;
    
    if(!orders.has(itemId)){
    orders.set(itemId, temp)
    console.log("created",orders)
    }
    else{
        
        if(orders.get(itemId).machineWash === ""){
            const temp1 = orders.get(itemId)
            temp1.machineWash = temp.machineWash;
            temp1.count = temp1.count + 1;
            orders.set(itemId, temp1)
           
        
        }
        
        else{
            
            const temp1 = orders.get(itemId)
            temp1.count = temp1.count - 1
            temp1.machineWash = '';
            orders.set(itemId, temp1)
            // console.log("updated")
        }
    }
    getWashType({quantity:"",machineWash:"",iron:"",dry:"",chemical:"",id:"",count:0})
    console.log(orders)
setReset(true)
}
const getChemicalWash = (e,itemId)=>{
       

    const temp = washType
    temp.chemical = e.target.alt
    temp.id=itemId
    temp.clouth = e.target.id;
    temp.count = temp.count + 1;

    if(!orders.has(itemId)){
    orders.set(itemId, temp)
    console.log("created",orders)
    }
    else{
        
        if(orders.get(itemId).chemical === ""){
           
            // console.log(orders.get(itemId).machineWash === "","true")
            const temp1 = orders.get(itemId)
            temp1.chemical = temp.chemical;
            temp1.clouth = e.target.id;
            temp1.count = temp1.count + 1;
            orders.set(itemId, temp1)
        
        }
        // console.log(temp1)
        else{
            const temp1 = orders.get(itemId)
            temp1.chemical = '';
            temp1.count = temp1.count - 1;
            orders.set(itemId, temp1)
            // console.log("updated")
        }
    }
    getWashType({quantity:"",machineWash:"",iron:"",dry:"",chemical:"",id:"",count:0})
    // console.log(orders)

    
    }
    const getdry = (e,itemId)=>{
        const temp = washType
        temp.dry = e.target.alt
        temp.id=itemId
        temp.clouth = e.target.id;
        temp.count = temp.count + 1; 

        if(!orders.has(itemId)){
        orders.set(itemId, temp)
        // console.log("created",orders)
        }
        else{
            
            if(orders.get(itemId).dry === ""){
                const temp1 = orders.get(itemId)
                temp1.dry = temp.dry;
                temp1.clouth = e.target.id;
                temp1.count = temp1.count + 1;
                orders.set(itemId, temp1)
                // console.log(orders.get(itemId).machineWash === "","true")
            
            }
            // console.log(temp1)
            else{
                const temp1 = orders.get(itemId)
                temp1.dry = '';
                temp1.count = temp1.count - 1;
                // console.log(temp,"temppvar")
                orders.set(itemId, temp1)
                // console.log("updated")
            }
        }
        getWashType({quantity:"",machineWash:"",iron:"",dry:"",chemical:"",id:"",count:0,clouth:""})
        // console.log(orders)

    }
    const getIron=(e,itemId)=>{
        const temp = washType
        temp.iron = e.target.alt
        temp.id=itemId
        temp.clouth = e.target.id;
        temp.count = temp.count + 1;

        if(!orders.has(itemId)){
        orders.set(itemId, temp)
        console.log("created",orders)
        }
        else{
            
            if(orders.get(itemId).iron === ""){
                const temp1 = orders.get(itemId)
                temp1.iron = temp.iron;
                temp1.clouth = e.target.id;
                temp1.count = temp1.count + 1;
                orders.set(itemId, temp1)
                
                // console.log(orders.get(itemId).machineWash === "","true")
            
            }
            // console.log(temp1)
            else{
                const temp1 = orders.get(itemId)
                temp1.iron = '';
                temp1.count = temp1.count - 1;
                // console.log("updated")
                orders.set(itemId, temp1)
            }
        }
        getWashType({quantity:"",machineWash:"",iron:"",dry:"",chemical:"",id:"",count:0})
        // console.log(orders)

    }
    const resethandler=(key)=>{
        if(orders.has(key)){
            setReset(!reset)
            orders.delete(key)
            // console.log(orders,"true")
        }
    }
    const setQuality=(e)=>{
        let {name,value}=e.target
        price.set(name,value)
        // console.log(price)
    }
 
    const submitHandler = ()=>{
        const orderArray = []
        // console.log(orders)
        // console.log(price)
       

        for(let [k,v] of orders){
            const temp =  {productType:"",washNames:"",quantity:"",washTypeMethod:"",single_total:"",washTYpeCost:""} 
            
            let clouths = v.clouth.split("=")
            console.log(price.get(clouths[0]))
            temp.productType = clouths[0]
            temp.washTYpeCost = clouths[1]
            temp.single_total = (parseInt(v.count) * parseInt(clouths[1])) * parseInt(price.get(clouths[0]))
            temp.quantity = price.get(clouths[0])
            temp.washTypeMethod = v.count

            if(v.machineWash){
                temp.washNames += v.machineWash + ",";
            }
            if(v.iron){
                temp.washNames += v.iron+","
            }
            if(v.dry){
                temp.washNames +=v.dry+","
            }
            if(v.chemical){
                temp.washNames +=v.chemical
            }
            orderArray.push(temp)
            console.log(temp)
        }
        console.log(orderArray)

    }
    const cancelhandler = () =>{
        // console.log("cancel order")
        setOrders(new Map())
        setPrice(new Map())
    }
  
    return <div>
        <div className="order-header">
            <div>Product Types</div>
            <div>Quantity</div>
            <div>Wash Type</div>
            <div>Price</div>
        </div>
       
        <div className="createOrder-container">
            {orderList.map((items,index)=>{
                return(<div className="orderType-container" key={index}>
                    <div className="product-container">
                        <div className="image-container">
                            <img src={items.clothImage} alt=""/>
                        </div>
                        <div className="details">
                            <p>{items.clothType}</p>
                            <p>{items.description}</p>
                        </div> 
                    </div>
                    <div className="input-container">
                        <input  onChange={setQuality} name={items.clothType} id={items.id} value={price.get(items.clothType) ? price.get(items.clothType) : ""} />
                    </div>
                    <div className="wash-types">
                        <div ><img src="/machine.png" alt="washing" id={`${items.clothType}=${items.cost}`} onClick={(e)=>getMachineWash(e,items.id)} /></div>
                        <div> <img src="/iron.png" alt="iron" id={`${items.clothType}=${items.cost}`} onClick={(e)=>getIron(e,items.id)}/></div>
                        <div><img src="/dry.png" alt="Dry" id={`${items.clothType}=${items.cost}`} onClick={(e)=>getdry(e,items.id)}/></div>
                        <div> <img src="/bleach.png" alt="chemical wash" id={`${items.clothType}=${items.cost}`} onClick={(e)=>getChemicalWash(e,items.id)}/></div>
    
                    </div>
                    <div className="priceAndReset">
                        <div className="price">
                           {price.get(items.clothType) && orders.get(items.id) ? 
                           <div >
                            <span className="individualSum" >{`${parseInt(price.get(items.clothType))} X ${orders.get(items.id).count * items.cost} =`}</span>
                           <span className="totalAmount">{`${parseInt(price.get(items.clothType))*(orders.get(items.id).count * items.cost)}`}</span></div>:"--" }
                        </div>
                        <div>{orders.get(items.id)?<button onClick={()=>resethandler(items.id)}>Reset</button>:""}</div>
                    </div>
                    
                </div>)

        })}
          <div className="btn-container">
            <button className="cancel-btn" onClick={cancelhandler}>Cancel</button>
            <button className="proceed-btn" onClick={submitHandler}>Procced</button>
          </div>  
        </div>
    </div>
} 
