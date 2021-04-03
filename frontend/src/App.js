import Footer from './components/Footer'
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Header></Header>
    <main className='py-5'>
      <Container>
        <Route path='/' component={Homescreen} exact/>
        <Route path='/product/:id' component={ProductScreen}/>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
