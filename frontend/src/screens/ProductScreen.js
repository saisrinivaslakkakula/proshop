import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
const ProductScreen = ({match}) => {
const [product,setProduct] = useState({})
useEffect(()=>{
    const fetchProduct = async () =>{
      const res = await axios.get(`/api/products/${match.params.id}`)
      setProduct(res.data)
    }
    fetchProduct()
},[]) //[] dependency array if we need options on useEffect
    return (
        <>
          <Link className="btn btn-light my-3" to = "/"> Go Back</Link>
          <Row>
              <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid/>
              </Col>
              <Col md={3}>
                  <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={product.rating} numreviews={product.numReviews}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col md={3} >
                  <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col> Price</Col>
                                <Col><strong>{product.price}</strong></Col> 
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col> Status</Col>
                                <Col>{product.countInStock>0?'In Stock':'Out of Stock'}</Col> 
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="btn-block" type="button" disabled={product.countInStock===0}>Add to Cart</Button></Col> 
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                   </Card>
              </Col>
          </Row>
        </>
    )
}

export default ProductScreen