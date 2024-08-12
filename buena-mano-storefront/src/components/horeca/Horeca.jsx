import Form from '../form/Form';
import Button from '../button/Button';
import './Horeca.css';
import {Link} from 'wouter';


function Horeca () {
    return (
        <div className='wrapper flex flex-col md:flex-row'>
       <main>

        <div className='channels flex justify-center'>
            <Link href='/Contacto'>
            <Button className='default-bttn  '>Personas</Button>
            </Link>
            <Button className='current-bttn'>Canal HORECA</Button>
        </div>
       <div className='intro-horeca'>
        <h1 className='text-sm text-center my-4'>DISTRIBUYE NUESTROS PRODUCTOS</h1>
        <p className='text-sm text-justify mx-8 mb-10'>
         Nuestros clientes también pueden disfrutar de nuestros helados en varios Hoteles, restaurantes y cafeterías en la zona de Pichilemu y alrededores.
        Si quieres ofrecer nuestros productos, llena la forma de contacto y te enviarémos mayor información. 
        </p>
       </div>

        <div className='contact-horeca justify-center flex mb-10'>
          <Form />

        </div>

        

       

       

    
       </main>
       
       </div> 
    )

}

export default Horeca