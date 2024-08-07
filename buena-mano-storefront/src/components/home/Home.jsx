import ProductsPreview from '../productsPreview/ProductsPreview'
import './Home.css';
import {Link} from 'wouter';


function Home() {

    return (
    <>
        <main className='hero-container w-100'>
            <div className=' welcome-text text-white text-justify w-3/5 flex flex-col gap-2'>
            <h1>¡Bienvenidos a Buenanamo!</h1>
            <h2> Helados de autor</h2>
            <p className='bm-intro flex flex-col'> 
            Fabricamos nuestros helados con productos de calidad,
            inspirados principalmente por sabores regionales,
            pero también trayendo a Pichilemu los mejores ingredientes del mundo. 
            Encuentra sabores libres de azucar, gluten o lactosa, y también veganos.
            Tenemos alternativas para todos los gustos,
            sin comprometer nuestro sabor y calidad.        
            Somos un equipo comprometido con el planeta. 
            ¡Nuestros envases son compostables!</p>
            <div className='bttn-container flex self-end '>
            <Link href='/Productos'>
            <button className='current-bttn '>Nuestro menú</button>
            </Link>
            </div>
            </div>
        </main>
        <section className='visit-us flex flex-col items-center'>
            <div className='visit-us-img w-72 h-64 mt-6  '>  
            </div>
            <div className='text-sm text-white text-justify mx-10 my-4'>
            <h1 className='text-center mb-4'>VISÍTANOS</h1>
            <p className=''>Ven a conocer nuestra fábrica de helados donde también puedes disfrutar de nuestros snacks y cafés. </p>
            </div>
            <div className='bttn-container flex self-end mr-8'>
                <Link href='/Contacto'>
                <button className='current-bttn'>Saber más</button>
                </Link>
            </div>
        </section>
        <section className='about-us flex flex-col items-center mb-6'>
            <div className='about-us-img w-72 h-60 mt-6'>

            </div>
            <div className='text-sm text-justify mx-10 my-4'>
                <p>Amantes de los helados, la naturaleza y los animales. Descubre nuestra historia, y qué nos inspira a crear los sabores de Buenamano.</p>
            </div>
            <div className='bttn-container flex self-end mr-8'>
                <Link href='/'>
                <button className='current-bttn'>Saber más</button>
                </Link>

            </div>

        </section>
       
       <div className='slider-container'>
        <h1 className='flex text-xs justify-center mt-14'>PRODUCTOS RECOMENDADOS</h1>

        <ProductsPreview />
     
     

       </div>   
       </>
    )
}

export default Home