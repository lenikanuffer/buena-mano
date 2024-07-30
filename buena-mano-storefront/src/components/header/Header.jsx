import {Link} from 'wouter';
import './Header.css'

function Header() {
    return (

        <header className=' flex flex-row justify-between items-start '>
           <div className='flex flex-row justify-start items-start'>
            <img src='logo.png' alt='buenamano logo' className='w-40  my-3 ' />
           </div>
           <div className='flex justify-end text-right'>
            <nav>
                <ul className='list-none flex flex-col text-right text-xs gap-2'>
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