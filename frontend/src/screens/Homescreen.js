
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
// *--Before Redux=>** import axios from 'axios'
import  {listProducts}  from '../actions/productListActions'

const Homescreen = () => {
   // *--Before Redux=>** const [products,setProducts] = useState([])
    /* After integrating with backend folder, products must come from backend not a front end .js
    hence we use useState hook to set the products array as soon as the page loads.
    To facilitate this, we need useEffect hook
    */
   /*** After using Redux */
   const dispatch = useDispatch() // function to choose the list of available dispatch methods created in actions. productListActions in this case

   const productList = useSelector(state=>state.productList)
   /* Here we're declaring a variable with same name used in the store.js; Basically store.js contains the list of possible parts of a state.
     we're pulling productList part of the global state and asigning it to the same named variable */

   const {products,loading,error} = productList

    /* we can pull the necessary components in state. In this case we're pulling the loading value, possibl;e error and products array */


    useEffect(()=>{
       // *--Before Redux=>**  const fetchProducts = async () =>{
           // const res = await axios.get('/api/products')// axios queries in the api and sets the result in res variable
            // /api/product queries in to http://localhost:3000 but we need 5000 port. Hence we add proxy in frontend/package.json file
           // setProducts(res.data)
        // *--Before Redux=>**   const res = await axios.get('api/products')
         // *--Before Redux=>**  setProducts(res.data)
        // *--Before Redux=>**              }
        // *--Before Redux=>**    fetchProducts()

        /*After using Redux, we need to modify use Effect to dispatch the action and change the state dynamically here */

        dispatch(listProducts())

        /*
        Below actions takes place when we dispatch the ListProducts() action
        1. The action listProducts is called in productListActions.js
        2. The action then fires the 'PRODUCT_LIST_REQUEST' which calls api/products
        3. On success, 'PRODUCT_LIST_SUCCESS' is activated in productsActions.js
        4. This changes the current state to new state. In this case, the current state before api call is
            empty array of products. upon successful action complete, the products array is going to be filled with the payload(data)
    */
    
   
    
    },[dispatch]) //[] dependency array if we need options on useEffect


    /* --IMPORTANT-- */
     /* To implement Loader, we use terinary operator 
     {loading?} means if loading == true;
     {loading? implement spin animation: (else check if error?display error: in case of no error render the products from the state. Which is products array)}

    /*------------*/
    return (
        <>
         <h1> Latest Releases</h1> 
         {loading?<Loader>Loading....</Loader>:error?<Message>{error}</Message>:
         <Row>
         {products.map(product=>(
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
             <Product product={product}/>
             </Col>
         ))}
        </Row>

         }
            
            
        </>
    )
}

export default Homescreen
