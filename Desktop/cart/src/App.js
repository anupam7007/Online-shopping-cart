import Cart from './Cart'
// import CartItem from './CartItem'      we dont need this anymore because we are creating an umbrella under which all quantities should be added 
import React from'react';
import Navbar from './Navbar'
class  App extends React.Component {
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
           products
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
                products
            })   

           }           
 handleDeleteProduct=(id) => {
     const{products}=this.state;                            //getting the products here 
     const items=products.filter((item)=>item.id !=id);
     this.setState({
        products:items
     })
 }  
  getCartCount=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count +=product.qty;
    })
    return count;
  }


  render(){
    const{ products }=this.state;
  return (
    <div className="App"style={styless.cartplace}>
     
     {/* <h1>CART</h1>       */}
    
     <Cart  products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct} />     
     
      <Navbar count={this.getCartCount()} />    
     {/* writing the above line is also important...after we write import statement as because we are rendering the cart.js here which is the umbrella under which we can add n number of items  */}
    </div>
  );
}
}
const styless={
  cartplace:{
      marginTop:130
  }
};
export default App;
