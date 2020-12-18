import React from 'react'
class CartItem extends React.Component
{
render()
{
     return(  
  //  Note that when the bracket was on the next line it was not working when we put it upwards it worked 
        <div className="cart-item">
            <div className="left-block">
             <img style={styles.image} />
            </div> 
            <div className="right-block">
                <div style={{fontSize:25,color:'pink'}}>phone</div>
                <div>999</div>
                <div>qty=1</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                </div>
            </div>
        </div>    
    );
}    
}        
const styles ={
image:{
    height:110,width:110,borderRadius:4,background:'#777'
}}
export default  CartItem;