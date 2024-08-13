import Button from '../button/Button';
import {Link} from 'wouter';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { SugarFree } from '../../assets/icons/icons';

const ProductCard = ({name, img, altText, description, localProduct, glutenFree, sugarFree, lactoseFree, vegan, scoop, halfLitre, litre, id}) => {
    
    function getImageUrl(name) {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
      }


    return (
       
        <div className='card-container flex flex-col w-80  border border-solid rounded-xl p-4'>
            <div className='image-title flex flex-col items-center mb-4'>
                <h1 className='mb-4'>{name}</h1>
                <img src={getImageUrl(img)} alt={altText} className='w-64 h-72 rounded-xl'/>
            </div>
            <div className='content-container mx-4 content-evenly'>
                <div className='description text-justify mb-4'>
                    <p>{description}</p>
                </div>
                <div className='formats-sellos flex gap-14'>
                    <div className='formats '>
                        <h1 className='text-sm mb-2'>FORMATOS</h1>
                        <ul>
                            <li>Bola: ${scoop}</li>
                            <li>1/2 litro: ${halfLitre}</li>
                            <li>Litro: ${litre}</li>
                        </ul>
                    </div>
                    <div className='sellos'>
                        <ul>
                            {localProduct == true && <li className='flex items-center gap-3'> <SugarFree /> Producto local</li>}
                            {glutenFree == true && <li className='flex items-center gap-3'> <SugarFree /> Libre de gluten</li> }
                            {sugarFree == true && <li className='flex items-center gap-3'> <SugarFree /> Libre de azúcar</li>} 
                            {lactoseFree == true && <li className='flex items-center gap-3'> <SugarFree /> Libre de lactosa</li>}
                            {vegan == true && <li className='flex items-center gap-3'> <SugarFree /> Vegan</li>}
                        </ul>
                    </div>
                    
                </div>
                <div className='button justify-end mt-4 flex '>
                        <Link href={`/Productos/${id}`}>
                        <Button className='default-bttn'>Detalles</Button>
                        </Link>
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
    litre: PropTypes.number,
    productLink: PropTypes.string,
    id: PropTypes.number

}