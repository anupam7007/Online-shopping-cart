import React from 'react'
class CartItem extends React.Component
{
    constructor(){
        super();
        // this is important to add constructor because constructor is from component and not from react
        this.state={
            price:999,
            title:' mobile phone',
            qty:1,
            img:''
        }
        // note that this things are already wriiten but to make a state has an added advantage..now inside render we are going to make a const{give the names of the list that we just made =this.state} 
    }
render(){

     const { price,title,qty }=this.state;
     return(  
  //  Note that when the bracket was on the next line it was not working when we put it upwards it worked 
        <div className="cart-item">
            <div className="left-block">
             <img style={styles.image} />
            </div> 
            <div className="right-block">
                 <div style={{fontSize:25,color:'pink'}}>{title}</div> 
                 <div>{price}</div> 
                 <div>{qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="increase"className="action-icons"src="https://img.icons8.com/pastel-glyph/2x/plus.png" />
                    <img alt="decrease"className="action-icons"src="https://img.icons8.com/pastel-glyph/2x/minus.png" />
                    <img alt="delete"className="action-icons"src="https://img.icons8.com/windows/2x/delete-forever.png" />
                </div>
            </div>
        </div>    
    );
}    
}        
const styles ={
image:{
    height:110,width:110,borderRadius:4,background  :'#777'
}}
export default  CartItem;