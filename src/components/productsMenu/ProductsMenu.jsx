import ProductsList from '../productsList/ProductsList';
import SnacksList from '../snacksList/SnacksList';
import './ProductsMenu.css'

function ProductsMenu() {
    return (
    <main>
        <section className='hero-menu flex justify-end md:justify-start'>
            <div className= 'text-white text-justify w-3/5 self-end m-4 md:text-xl md:w-1/5 md:self-start md:leading-loose md:m-12'>
                <p>Descubre nuestro menú de Helados, snacks y cafés disponibles en nuestra fábrica. </p>
            </div>

        </section>
       <section className='flex flex-col'>
        <h1 className='flex text-xs justify-center mt-14'>HELADOS</h1>
        <ProductsList />
       </section>  
       <section>
        <h1 className='flex text-xs justify-center mt-14'>SNACKS</h1>
        <SnacksList />
       </section>  
       </main>
    )
}

export default ProductsMenu