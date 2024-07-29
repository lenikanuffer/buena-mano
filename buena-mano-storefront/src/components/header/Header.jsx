import {Link} from 'wouter';
import './Header.css'

function Header() {
    return (

        <header className='max-w-full flex m-2 justify-between'>
           <div className='w-44'>
            <img src='logo.png' alt='buena mano logo' className='w-40 m-3 ' />
           </div>
           <div className=''>
            <nav>
                <ul className='list-none flex flex-col text-right mt-4 mr-2 text-xs gap-2'>
                    <li>
                        <Link  href='/Inicio' className={(active) => (active ? 'active-font' : '')}>INICIO</Link></li>
                    <li>
                        <Link href='/Productos' className={(active) => (active ? 'active-font' : '')} >PRODUCTOS</Link></li>
                    <li>
                        <Link href='/Contacto' className={(active) => (active ? 'active-font' : '')} >CONTACTO</Link></li>
                </ul>
            </nav>
           </div>
        </header>
    )
}

export default Header