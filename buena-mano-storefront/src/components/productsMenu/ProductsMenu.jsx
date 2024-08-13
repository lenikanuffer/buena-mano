import ProductsList from '../productsList/ProductsList';
import SnacksList from '../snacksList/SnacksList';
import './ProductsMenu.css'

function ProductsMenu() {
    return (
    <main>
        <section className='hero-menu'>

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