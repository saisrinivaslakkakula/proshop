import Footer from './components/Footer'
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Loginscreen from './screens/loginScreen'
import Registerscreen from './screens/registerScreen'
import ProfileScreen from './screens/profileScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Header></Header>
    <main className='py-5'>
      <Container>
        
        <Route path='/login' component={Loginscreen}/> 
        <Route path='/register' component={Registerscreen}/> 
        <Route path='/profile' component={ProfileScreen}/> 
        <Route path='/product/:id' component={ProductScreen}/>
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/' component={Homescreen} exact/>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
