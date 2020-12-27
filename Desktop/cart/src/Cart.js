// the first thing we do after creating cart.js is we copy all the contents of cartItem.js onto cart
import React from 'react'
import CartItem from './CartItem'
//class Cart extends React.Component
const Cart= (props) => {

    
     const{ products }=props;  
 return(
     <div>
      {products.map((product)=> {
           return <CartItem product={product} key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            handleDeleteProduct={props.handleDeleteProduct} />   //after writing here the delete part go and write down in the props part in CartItem file 
            
    //   we pass handleIncreaseQuantity as a parameter(props as its called)
     })}


           {/* <CartItem qty={1} price={9999} title={"watch"} img={ ' '} /> 
           <CartItem /> 
           <CartItem /> 
        
         {/* {arr.map((item)=>{ */}
             {/* return item+5 */}
         {/* })    } */}
        
     </div> 
 );
}
   

export default Cart
