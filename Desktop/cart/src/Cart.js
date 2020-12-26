// the first thing we do after creating cart.js is we copy all the contents of cartItem.js onto cart
import React from 'react'
import CartItem from './CartItem'
class Cart extends React.Component
{
    constructor(){
             super();
             // this is important to add constructor because constructor is from component and not from react
            this.state={
                products:[
                {
                    price:9999,
                    title:' mobile phone',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:1000,
                    title:' watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:9999,
                    title:' shirt',
                    qty:1,
                    img:'',
                    id:3
                    }
                ]
            }
            // note that this things are already wriiten but to make a state has an added advantage..now inside render we are going to make a const{give the names of the list that we just made =this.state} 
            // this.increaseQuantity=this.increaseQuantity.bind(this);
        }
           handleIncreaseQuantity =(product) =>{
               console.log("hey plz increase the quantity",product); //this is actually for the message in the console of the web page 
            //    now we will pass this handleIncreaseQuantity thrrough props
            const{ products }=this.state;
            const index= products.indexOf(product);  
                // will give the index of the particular product being passed
                products[index].qty +=1;
                this.setState({
                    products:products
                })
            }

            handleDecreaseQuantity =(product) =>{
            console.log("hey plz decrease the quantity",product); //this is actually for the message in the console of the web page 
            //    now we will pass this handleIncreaseQuantity thrrough props
            const{ products }=this.state;
            const index= products.indexOf(product)
                           // will give the index of the particular product being passed
                           if(products[index].qty==0)
                           {
                               return;
                           }
                     products[index].qty-=1;
                     this.setState({
                         products:products
                     })   

                    }           
          handleDeleteProduct=(id) => {
              const{products}=this.state;                            //getting the products here 
              const items=products.filter((item)=>item.id !=id);
              this.setState({
                 products:items
              })
          }  
render()
{
     const{ products }=this.state
       // const arr=[1,2,3,4,5]
      
 return(
     <div>
      {products.map((product)=> {
           return <CartItem product={product} key={product.id}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct} />   //after writing here the delete part go and write down in the props part in CartItem file 
            
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
}     

export default Cart
