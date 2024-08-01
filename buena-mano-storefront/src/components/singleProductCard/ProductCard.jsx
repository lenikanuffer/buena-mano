import PropTypes from 'prop-types';
import './ProductCard.css'
import { SugarFree } from '../../assets/icons/icons';

const ProductCard = ({name, img, altText, description, localProduct, glutenFree, sugarFree, lactoseFree, vegan, scoop, halfLitre, litre}) => {
    
    function getImageUrl(name) {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
      }

    return (
        <div className='card-container flex flex-col w-80 border border-solid border-2 rounded-xl p-4'>
            <div className='image-title flex flex-col items-center mb-4'>
                <h1 className='mb-4'>{name}</h1>
                <img src={getImageUrl(img)} alt={altText} className='w-64 rounded-xl'/>
            </div>
            <div className='content-container flex flex-col'>
                <div className='description text-justify mb-4'>
                    <p>{description}</p>
                </div>
                <div className='formats-sellos flex gap-14'>
                    <div className='formats '>
                        <h1 className='text-sm'>FORMATOS</h1>
                        <ul>
                            <li>Bola: ${scoop}</li>
                            <li>1/2 litro: ${halfLitre}</li>
                            <li>Litro: ${litre}</li>
                        </ul>
                    </div>
                    <div className='sellos'>
                        <ul>
                            <li className='flex items-center gap-3'> <SugarFree /> Producto local{localProduct}</li>
                            <li className='flex items-center gap-3'> <SugarFree /> Libre de gluten{glutenFree}</li>
                            <li className='flex items-center gap-3'> <SugarFree /> Libre de azúcar{sugarFree}</li>
                            <li className='flex items-center gap-3'> <SugarFree /> Libre de lactosa{lactoseFree}</li>
                            <li className='flex items-center gap-3'> <SugarFree /> Vegan{vegan}</li>
                        </ul>
                    </div>
                    
                </div>
                <div className='button flex justify-end mt-4'>
                        <button className='button-det p-3 border border-2 border-solid rounded-full text-white border-white'>Detalles</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    localProduct: PropTypes.bool,
    glutenFree: PropTypes.bool,
    sugarFree: PropTypes.bool,
    lactoseFree: PropTypes.bool,
    vegan: PropTypes.bool,
    scoop: PropTypes.number,
    halfLitre: PropTypes.number,
    litre: PropTypes.number

}