import './Header.css'

function Header() {
    return (

        <header className='max-w-full flex m-2 justify-between '>
           <div className='w-44 md:justify-self-center'>
            <img src='logo.png' alt='buena mano logo' className='' />
           </div>
           <div className=''>
            <nav>
                <ul className='list-none flex flex-col text-right mt-4 mr-2 text-xs gap-2'>
                    <li>INICIO</li>
                    <li>PRODUCTOS</li>
                    <li>CONTACTO</li>
                </ul>
            </nav>
           </div>
        </header>
    )
}

export default Header