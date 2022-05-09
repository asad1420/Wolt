import React, { useState } from "react";
import {  IState as Props} from "../App"

 
 interface IProps{      
          people: Props["people"]
          setPeople: React.Dispatch<React.SetStateAction<Props["people"] >>       
 }

const ItemList: React.FC<IProps> = ({ setPeople}) => {

  
    const [input, setInput] = useState({
        cartValue: 0,
        deliveryDistance: 0,
        NoOfItems: 0,
        date: 0,
   

      })
      
      
      const HandleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
            
            
        })
   }
    
  

      const handleClick = (): void => {
            if (!input.cartValue || !input.NoOfItems || !input.deliveryDistance || !input.date ){
                return

                
            }
             

            setPeople({
                cartValue: input.cartValue,
                deliveryDistance: input.deliveryDistance,
                NoOfItems: input.NoOfItems,
                date: input.date
            })
            

            setInput({

                cartValue: 0,
                deliveryDistance: 0,
                NoOfItems: 0,
                date: 0,

             })


        }

            
    return(  
       <div >
           
    <div className="user-box">
        
          <input 
             type="number"
             placeholder="Cart Value"
             className="AddToList-input"
             value={input.cartValue}
             onChange={HandleChange}
             name="cartValue"
          /> <label > Cart Value </label>  
           </div>
           <div className="user-box">
           <input 
             type="number"
             placeholder="400"
             className="AddToList-input"
             value={input.deliveryDistance}
             onChange={HandleChange}
             name="deliveryDistance"
          /> <label >  Delivery Distance </label> 
          </div>
          <div className="user-box">
             <input 
             type="number"
             placeholder="Amount"
             className="AddToList-input"
             value={input.NoOfItems}
             onChange={HandleChange}
             name="NoOfItems"
          />   <label > Amount of items </label>
          </div>
          <div>
          <input
             type="datetime-local"
             placeholder="Amount"
             className="AddToList-input"
             value={input.date}
             onChange={HandleChange}
             name="date"

              />    
         </div>
         <div className="user-box">
         <a onClick={handleClick}  id="btn_delivery" >
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         Calculate Delivery Price
    </a >
          </div>
       </div>
    )
}

export default ItemList
