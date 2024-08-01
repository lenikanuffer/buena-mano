import {Link, Route, Switch} from 'wouter'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import './App.css'


function App() {

  return (
  
      <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/Productos' component={Products} />
        <Route path='/Contacto' component={Contact} />
      </Switch>
      <Footer />
      </div>
  )
}

export default App
