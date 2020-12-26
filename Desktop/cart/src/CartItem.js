import React from 'react'
class CartItem extends React.Component
{
// NOW WE COMMENT THE ENTIRE PART AND COPY IT IN THE CART.JS 
    // constructor(){
    //     super();
    //     // this is important to add constructor because constructor is from component and not from react
    //     this.state={
    //         price:999,
    //         title:' mobile phone', 
    //         qty:1,
    //         img:''
    //     }
    //     // note that this things are already wriiten but to make a state has an added advantage..now inside render we are going to make a const{give the names of the list that we just made =this.state} 
    //     // this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    //     increaseQuantity = () => {
    //          console.log('this.state',this.state);
    //         //  this.state.qty+=1; here doing this only increases the quantity in console and not in the react to make the react know that we are increasing we should use setState function

    //          this.setState({qty:this.state.qty+1});
    //     //    for the rest of the functionalities we generally copy and paste the stuff 
            
    //     }

    //     decreaseQuantity = () => {
    //         console.log('this.state',this.state);
    //        //  this.state.qty+=1; here doing this only increases the quantity in console and not in the react to make the react know that we are increasing we should use setState function
    //         if(this.state.qty==1)
    //         {
    //             return;
    //         }
    //         this.setState({qty:this.state.qty-1});
    //    //    for the rest of the functionalities we generally copy and paste the stuff 
           
    //    }
render()
{
     console.log('this.props',this.props);
    //  the above line was added after studying props
    //  const { price,title,qty }=this.state 
    // this was done earlier now we use props
    const { price,title,qty }=this.props.product;
    const{
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        handleDeleteProduct
        }=this.props;
     return(  
  //  Note that when the bracket was on the next line it was not working when we put it upwards it worked 
        <div className="cart-item">
            <div className="left-block">
              <img style={styles.image} />
            </div> 
            <div className="right-block">
                 <div style={{fontSize:25,color:'pink'}}>{title}</div> 
                 <div>Rs{price}</div> 
                 <div>{qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="increase"className="action-icons"src="https://img.icons8.com/pastel-glyph/2x/plus.png"
                     onClick={() => this.props.onIncreaseQuantity(this.props.product)} />
                    <img alt="decrease"className="action-icons"src="https://img.icons8.com/pastel-glyph/2x/minus.png"
                    onClick={()=>this.props.onDecreaseQuantity(this.props.product)} />
                    <img alt="delete"className="action-icons"src="https://img.icons8.com/windows/2x/delete-forever.png"
                    onClick={()=>this.props.handleDeleteProduct(product.id)} />
                </div>
            </div>
        </div>    
    );
}    
}     
const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
    export default CartItem; 
