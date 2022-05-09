import React, { useState } from 'react';
import './App.css';
import ItemList from  './components/itemList';
import Estimatedprice from './components/estimatedPrice';

export interface IState{
  people: {
    cartValue: number 
    deliveryDistance: number 
    NoOfItems: number 
    date: number 
    

  } 
}






function App() {

  const [people, setPeople] = useState<IState["people"]>({
    cartValue: 0,
    deliveryDistance: 0,
    NoOfItems: 0,
    date: 0
  })

  

  return (
    <div className="App">
      <div className="login-box">
      <h2> Delivery Fee Calculator </h2>
      <form>
      <ItemList people={people} setPeople={setPeople}/>
      </form>
      <div className="user-box">
      <Estimatedprice people={people}/>
      </div>
      </div>
    
    </div>
  );
}

export default App;
