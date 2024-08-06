import './Horeca.css';
import {Link} from 'wouter';


function Horeca () {
    return (
        <div className='wrapper flex flex-col md:flex-row'>
       <main>

        <div className='channels flex justify-center'>
            <Link href='/Contacto'>
            <button className='channel-bttn  '>Personas</button>
            </Link>
            <button className='channel-bttn current'>Canal HORECA</button>
        </div>
       <div className='intro-horeca'>
        <h1 className='text-sm text-center my-4'>DISTRIBUYE NUESTROS PRODUCTOS</h1>
        <p className='text-sm text-justify mx-8 mb-10'>
         Nuestros clientes también pueden disfrutar de nuestros helados en varios Hoteles, restaurantes y cafeterías en la zona de Pichilemu y alrededores.
        Si quieres ofrecer nuestros productos, llena la forma de contacto y te enviarémos mayor información. 
        </p>
       </div>

        <div className='contact-horeca justify-center flex mb-10'>
            <form action="" className='flex flex-col w-80  gap-2'>
                <label htmlFor='name' name='name'  className='text-sm'>Nombre*</label>
                <input id='name' type="text" minLength='6' required className='text-sm border contact-form'/>
                <label htmlFor='company'  className='text-sm'>Empresa</label>
                <input id='company' type="text" minLength='6' className='text-sm border contact-form'/>
                <label htmlFor='email'  className='text-sm'>e-mail*</label>
                <input id='email' type="text" minLength='6'  required className='text-sm border contact-form' />
                <label htmlFor='phone'  className='text-sm'>Teléfono</label>
                <input id='phone' type="text" minLength='9' className='text-sm border contact-form'/>
                <label htmlFor='message'  className='text-sm'>Mensaje*</label>
                <textarea id="message" className='text-sm border contact-form' minLength='10' required rows='8' ></textarea>
                <button type='submit' className='text-sm button-bm w-1/4 text-white self-end'>Enviar</button>
            </form>

        </div>

       

       

    
       </main>
       
       </div> 
    )

}

export default Horeca