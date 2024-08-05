import {Link, Route, Switch} from 'wouter'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ProductsPage from './components/productsPage/ProductsPage';
import Contact from './components/contact/Contact';
import './App.css'


function App() {

  return (
  
      <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/Productos' component={ProductsPage} />
        <Route path='/Contacto' component={Contact} />
      </Switch>
      <Footer />
      </div>
  )
}

export default App
