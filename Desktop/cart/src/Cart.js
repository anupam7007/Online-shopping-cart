// the first thing we do after creating cart.js is we copy all the contents of cartItem.js onto cart
import React from 'react'
import CartItem from './CartItem'
class Cart extends React.Component
{
render()
{
 return(
     <div>
          <CartItem />
     </div>
 );
}
}
export default Cart;