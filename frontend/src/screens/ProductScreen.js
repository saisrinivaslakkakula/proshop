import React,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, Container, FormControl} from 'react-bootstrap'
import Rating from '../components/Rating'
import {listProductDetails} from '../actions/productListActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const ProductScreen = ({history,match}) => {
const [Qty,setQty] = useState(1) //Qty is the variable holding the quantity and setQty is the state where on dropdown select, 
//the value of selected must be displayed in the dropdown text box. This is a component level state.
const dispatch = useDispatch()
const productDetails = useSelector(state=>state.productDetails)
const {product,error,loading} = productDetails
useEffect(()=>{
    dispatch(listProductDetails(match.params.id))
},[dispatch,match]) //[] dependency array if we need options on useEffect

const addToCartHandler = () =>{
    history.push(`/cart/${match.params.id}?qty=${Qty}`)

}
    return (
        <>
          <Link className="btn btn-light my-3" to = "/"> Go Back</Link>
          {loading
          ?
            <Loader>Loading..</Loader>
          :
            error
             ?
               <Message variant='danger'>{error}</Message>
             :
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

                                { /* When the item is in stock only, display the Qty select component*/
                                product.countInStock >0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col> Qty:</Col>
                                            <Col>
                                            <FormControl as='select' value={Qty} onChange={(e)=>{setQty(e.target.value)}}>
                                            {
                                                /* on Select something must be done. i.e the component level state must be changed.
                                                To do this, we use FormControl Element of React. it it set to Select. Qty = Qty at any point of time
                                                which is set by component level state modifier function setQty()
                                                */

                                                /*
                                                We're using spread operator here to map through the Items available in stock. it's like implementing
                                                foreach loop in php to fill the option values of dropdown bar dynamically
                                                */
                                                [...Array(product.countInStock).keys()].map(
                                                    (x) =>(
                                                        <option key ={x+1} value={x+1}>{x+1}</option>
                                                    )
                                                )
                                            }
                                            </FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                                }

                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                        <Button className="btn-block" type="button" disabled={product.countInStock===0}
                                        onClick = {addToCartHandler}
                                        >
                                            Add to Cart
                                        </Button>
                                        </Col> 
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                            </Card>
                        </Col>
                    </Row>
             }
          
        </>
    )
}

export default ProductScreen
