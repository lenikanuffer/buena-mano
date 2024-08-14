import {Link} from 'wouter';
import { Instagram, Facebook, Tiktok } from '../../assets/icons/icons'
import './Footer.css'


function Footer() {
    return (

       <footer className='flex flex-col md:flex-row md:justify-between p-5 text-white text-xs bg-buenamano-default'>
        <div className='text-center md:mt-6'>
            <p>SIGUENOS!</p>
            <ul className='flex p-4 gap-5 justify-center'>
                <li><a href="https://www.instagram.com/buenamanohelados/?hl=en"><Instagram /></a></li>
                <li><a href="https://www.facebook.com/p/Buenamano-Helados-100049020916824/"><Facebook /></a></li>
                <li><Tiktok /></li>
            </ul>
        </div>
        <div className='flex flex-col md:flex-row my-6 gap-3 m-6 md:w-1/2 md:justify-around'>
            <ul className='flex md:flex-col justify-between '>
                <li>
                    <Link href='/'>INICIO</Link></li>
                <li>
                    <Link href='/Productos'>PRODUCTOS</Link></li>
                <li>
                    <Link href='/Contacto'>CONTACTO</Link></li>
            </ul>
            <ul className='flex md:flex-col justify-between'>
                <li>
                    <Link href='/'>QUIENES SOMOS</Link></li>
                <li>
                    <Link href='/Contacto'>CAFÉ</Link></li>
                <li>
                    <Link href='/Horeca'>DISTRIBUIDORES</Link></li>
            </ul>
        </div>
        <div id='copyrights' className='flex flex-col mt-3 md:justify-end'>
            <p>&copy; Todos los derechos reservados.</p> 
            <p>Diseñado con ♡ in Berlín </p>
            <p>2024</p>
        </div>
       </footer>
    )
}

export default Footer