import { useState } from 'react';
import Header from './components/header/Header';
import './App.css'
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
  <body>
      <div>
      <Header />
      <Footer />
      </div>
      </body> 
  )
}

export default App
