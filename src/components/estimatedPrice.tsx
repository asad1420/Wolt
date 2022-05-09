
import React from "react";
import {IState as DProps} from "../App"


 
     interface IProps{
     people:  DProps["people"]

     }

  
     export class estimatedPrice{
    
       DeliveryPrice: number 
       CartValue: number
       NoofItems: number
       DeliveryDistance: number
       Day: any 
       Hour: number 
       Minutes: number
       ExtraSurcharge: boolean 
       

     constructor(deliveryPrice: number, cartValue: number, noOfItems: number, deliveryD: number, day: any, hour: number, minutes: number, extraSurcharge: boolean) {
        this.DeliveryPrice = deliveryPrice
        this.CartValue = cartValue
        this.NoofItems = noOfItems
        this.DeliveryDistance = deliveryD
        this.Day = day
        this.Hour = hour
        this.Minutes = minutes
        this.ExtraSurcharge = extraSurcharge

     }
          
      deliveryDistance = (deliveryDistance: number, deliveryPrice: number): number  => {
        
        if(deliveryDistance <= 1000){
            deliveryPrice += 2;
            return deliveryPrice
        }

        if(deliveryDistance > 1000){
            deliveryPrice += 2;
            let diff = deliveryDistance  - 1000;
             
            for(let i = 0; i<=diff/500; i++){
                if (diff%500 == 0 && i == (diff/500) - 1){
                    deliveryPrice += 1;
                   
                    break;
                    
                }
                    deliveryPrice += 1;

                
            }
              return deliveryPrice
           }
           return deliveryPrice
      }

    




        rushHours = (day: string, Hour: number, Minutes: number, surcharges: boolean) => {
        

        if(day == "friday" && Hour > 14 && Hour < 20 ){
            surcharges = true

               if(Hour > 18 && Minutes > 0){
                surcharges = false
                   return surcharges
               }
               return surcharges
        }

           return surcharges
       }       

         cartValueScale = (cartValue:number, DeliveryPrice:number): number => {
          
         if(cartValue < 10){
            let diff = 10 - cartValue
                DeliveryPrice += diff

              return  Number(Intl.NumberFormat('en-US').format(DeliveryPrice))
             
          }
    
          if(cartValue! >= 100){
            DeliveryPrice = 0;
            
            return DeliveryPrice
          }

          return DeliveryPrice
         }


       cartItems = (NoofItems: number, DeliveryPrice: number): number => {
        
        if(NoofItems >= 5){
            let diff = NoofItems - 4;
            DeliveryPrice  += diff * .50;
          
           }
           return DeliveryPrice
         }

       DeliveryLimit = (DeliveryPrice: number) => {
        
        if(DeliveryPrice  >= 15){
      
            DeliveryPrice  = 15;
          }
          return DeliveryPrice
         }

     };

     export  const Date_Day = (variable: number) => {
     let daysArr = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
     
     switch (variable)
     {
     case 1:
     {
     return daysArr[0]
      
     }

     case 2:
        {
            return daysArr[1]
            
        }


     case 3:
        {
            return daysArr[2]
          
        }

     case 4:
        {
            return daysArr[3]
           
        }
     case 5:
        {
            return daysArr[4]
           
        }
     case 6:
        {
            return daysArr[5]
            
        }
     case 7:
        {
            return daysArr[6]
           
        }

     }

     }

     export const Dday = (variable: number) =>  {
         console.log(variable)
     let date = new Date(variable);
     var day = date.getDay();
     
 
     return Date_Day(day)
     }

     const Dhours = (variable:number) => {
    
     let date = new Date(variable);
     var time = date.getHours();
     return(time)
     }

     const DMinutes = (variable: number) => {
     let date = new Date(variable);
     var minutes = date.getMinutes();
     return(minutes)
     
     
}
 
        const testfunc = (people: IProps["people"]): number => {
          
            if (!people.cartValue || !people.NoOfItems || !people.deliveryDistance || !people.date ){
                return 0

                
            }
          
            let day = Dday(people.date!)
            let hour = Dhours(people.date!)
            let minutes = DMinutes(people.date!)
            
            

      const delivery = new estimatedPrice(0.0, people.cartValue!, people.NoOfItems!, people.deliveryDistance!, day, hour, minutes, false)

      delivery.ExtraSurcharge = delivery.rushHours(day!, hour!, minutes!, delivery.ExtraSurcharge)!
      
      delivery.DeliveryPrice = delivery.deliveryDistance(delivery.DeliveryDistance, delivery.DeliveryPrice) 
       
      delivery.DeliveryPrice = delivery.cartValueScale(delivery.CartValue, delivery.DeliveryPrice)

      delivery.DeliveryPrice = delivery.cartItems(delivery.NoofItems, delivery.DeliveryPrice)

      delivery.DeliveryPrice = delivery.DeliveryLimit(delivery.DeliveryPrice)

      
      
      if(delivery.ExtraSurcharge){
    
       delivery.DeliveryPrice  *= 1.1
      }
          

      return delivery.DeliveryPrice
     
    }
 

      const Estimatedprice: React.FC<IProps> = ({ people }):  any => {
     
      var deliveryPrice = testfunc(people)
  
      const mainFunc = (): JSX.Element  => {
          

         return( 
         
          <div>
 Delivery Price: {deliveryPrice}  
          </div>
              
               
            )
          }
    
         return (
            <div>
               <h2> {mainFunc() }  </h2>   
            </div>
         );
         }
    
           export default Estimatedprice