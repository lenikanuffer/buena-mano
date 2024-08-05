import ProductsList from '../productsList/ProductsList';
import SnacksList from '../snacksList/SnacksList';
import './ProductsPage.css'

function ProductsPage() {
    return (
    <>
       <div>
        <h1 className='flex text-xs justify-center mt-14'>HELADOS</h1>
        <ProductsList />
       </div>  
       <div>
        <h1 className='flex text-xs justify-center mt-14'>SNACKS</h1>
        <SnacksList />
       </div>  
       </>
    )
}

export default ProductsPage