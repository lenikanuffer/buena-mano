import {Route, Switch} from 'wouter'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ProductsMenu from './components/productsMenu/ProductsMenu';
import Contact from './components/contact/Contact';
import Horeca from './components/horeca/Horeca';
import './App.css'
import ProductPage from './components/productPage/ProductPage';
import SnackPage from './components/snackPage/SnackPage';


function App() {

  return (
  
      <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/Productos' component={ProductsMenu} />
        <Route path='/Contacto' component={Contact} />
        <Route path='/Horeca' component={Horeca} />
        <Route path='/Productos/:id' component={ProductPage}/>
        <Route path='/Snacks/:id' component={SnackPage} />
      </Switch>
      <Footer />
      </div>
  )
}

export default App
