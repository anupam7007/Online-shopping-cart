import Cart from './Cart'
// import CartItem from './CartItem'      we dont need this anymore because we are creating an umbrella under which all quantities should be added 
import React from'react';
function App() {
  return (
    <div className="App">
     
     {/* <h1>CART</h1>       */}
    
     <Cart />     
     <Cart />
     <Cart />
     {/* writing the above line is also important...after we write import statement as because we are rendering the cart.js here which is the umbrella under which we can add n number of items  */}
    </div>
  );
}
export default App;
