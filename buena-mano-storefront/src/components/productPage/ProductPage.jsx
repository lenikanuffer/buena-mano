import { Local, SugarFree, GlutenFree } from '../../assets/icons/icons'
import ProductsPreview from '../productsPreview/ProductsPreview'
import './SingleProduct.css'


const ProductPage = ({name, img, altText, description, localProduct, glutenFree, sugarFree, lactoseFree, vegan, scoop, halfLitre, litre, productLink, ingredients}) => {
    
    function getImageUrl(name) {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
      }

  
    return (
    <>
     <div className='product-container flex flex-col md:flex-row md:items-start '>
        <div className='image-container flex flex-col items-center gap-5 p-5 pb-10 md:w-2/6 md:bg-white '>
            <h1 className='text-sm text-center text-white md:text-black'>{name}</h1>
            <img src={getImageUrl(img)} alt={altText} className='w-80 rounded-lg' />
        </div>
        <div className='description-icons-container flex text-sm m-5 gap-5 md:w-2/6 md:mt-14'>
            <div className='description text-justify w-2/4'>
                <p>{description}</p>
            </div>
            <div className='icons-list text-xs '>
                <ul className='flex flex-col gap-2  sellos'>
                            {localProduct == true && <li className='flex items-center gap-3'> <Local /> Producto local</li>}
                            {glutenFree == true && <li className='flex items-center gap-3'> <GlutenFree /> Libre de gluten</li> }
                            {sugarFree == true && <li className='flex items-center gap-3'> <SugarFree /> Libre de azúcar</li>} 
                            {lactoseFree == true && <li className='flex items-center gap-3'> <SugarFree /> Libre de lactosa</li>}
                            {vegan == true && <li className='flex items-center gap-3'> <SugarFree /> Vegan</li>}
                </ul>
            </div>
        </div>
        <div className='ingredients-formats flex text-sm m-5 gap-5 md:mt-14'>
            <div className='ingredients text-justify w-2/4'>
                <p className='text-sm mb-2'>INGREDIENTES</p>
                <p className='sellos'>{ingredients}</p>
            </div>
            <div className='formats'>
                <p className='text-sm mb-2'>FORMATOS</p>
                <ul className='sellos'>
                    <li>Bola: ${scoop}</li>
                    <li>1/2 litro: ${halfLitre}</li>
                    <li>Litro: ${litre}</li>
                </ul>
            </div>
        </div>
     </div>
     <aside>
        <h1 className='flex text-xs justify-center mt-14'>PRODUCTOS RECOMENDADOS</h1>
        <ProductsPreview />
     </aside>
       </>
    )
}

export default ProductPage