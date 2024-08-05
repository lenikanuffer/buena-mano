import ProductsPreview from '../productsPreview/ProductsPreview'
import './Home.css'

function Home() {
    return (
    <>
        <div className='flex flex-col md:flex-row m-4 gap-5 '>
            <div className='flex '>
            <img src='/src/assets/images/hero2.png' alt='Persona sirviendo un cono de helado' className='md:max-w-sm'/>
            </div>
            <div className='text-justify flex flex-col gap-2 md:max-w-sm md:mt-60'>
            <h1>¡Bienvenidos a Buenanamo!</h1>
            <h2> Helados de autor</h2>
            <p className=' flex flex-col text-sm md:align-bottom'> Fabricamos nuestros helados con productos de calidad,
            inspirados principalmente por sabores regionales,
            pero también trayendo a Pichilemu los mejores ingredientes del mundo. 
            Encuentra sabores libres de azucar, gluten o lactosa, y también veganos.
            Tenemos alternativas para todos los gustos,
            sin comprometer nuestro sabor y calidad.        
            Somos un equipo comprometido con el planeta. 
            ¡Nuestros envases son compostables!</p>
            </div>

        </div>
       
       <aside>
        <h1 className='flex text-xs justify-center mt-14'>PRODUCTOS RECOMENDADOS</h1>
        <ProductsPreview />
       </aside>  
       </>
    )
}

export default Home