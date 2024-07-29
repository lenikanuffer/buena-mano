import {Link, Route, Switch} from 'wouter'
import { useState } from 'react';
import Header from './components/header/Header';
import './App.css'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
      <Header />
      <Switch>
        <Route path='/Inicio' component={Home} />
        <Route path='/Productos' component={Products} />
        <Route path='/Contacto' component={Contact} />
      </Switch>
      <Footer />
      </div>
  )
}

export default App
