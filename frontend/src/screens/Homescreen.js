
import React, {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const Homescreen = () => {
    const [products,setProducts] = useState([])
    /* After integrating with backend folder, products must come from backend not a front end .js
    hence we use useState hook to set the products array as soon as the page loads.
    To facilitate this, we need useEffect hook
    */

    useEffect(()=>{
        const fetchProducts = async () =>{
           // const res = await axios.get('/api/products')// axios queries in the api and sets the result in res variable
            // /api/product queries in to http://localhost:3000 but we need 5000 port. Hence we add proxy in frontend/package.json file
           // setProducts(res.data)
          const res = await axios.get('api/products')
          setProducts(res.data)
        }
        fetchProducts()
    },[]) //[] dependency array if we need options on useEffect

    return (
        <>
         <h1> Latest Products</h1>
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen
