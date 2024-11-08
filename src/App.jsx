import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { useEffect } from "react";
import { addToLocalStorage, getStoreCart } from "./utilitis/LocalStorage";


function App() {
  const [bottles, setBottles] = useState([]);

  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);


  // load cart local storage 

  useEffect(() => {
    console.log('useEffect',bottles.length)
    if(bottles.length>0){
    
    const storeCart = getStoreCart();
    console.log(storeCart,bottles);
    

    const savedCart =[];
    for (const id of storeCart){
      console.log(id);
      const bottle = bottles.find(bottle => bottle.id === id);
    if(bottle){
      savedCart.push(bottle)
    }
  }

    setCart(savedCart)
    }
    
    
  }, [bottles]);




  const handleAddToCard = (bottle) => {
    const newCart =[...cart,bottle] // ekhane aager jmne push kortam eibhabe push korte parbo naa tai spread(...) diye copy korlam tarpor setCart kore dilam
     setCart(newCart);
     addToLocalStorage(bottle.id)
  };

  return (
    <>
      <h2>Memorable Water Bottles</h2>
      <h3>Bottles Available : {bottles.length}</h3>

      <h4 className="cart-section">Cart : {cart.length}</h4>

      <hr />
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Header
            key={bottle.id}
            bottle={bottle}
            handleAddToCard={handleAddToCard}
          ></Header>
        ))}


      
        
      </div>
    </>
  );
}

export default App;
