import {Link} from 'wouter';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import './SnackCard.css'
import { SugarFree } from '../../assets/icons/icons';

const SnackCard = ({name, img, altText, description, localProduct, glutenFree, sugarFree, lactoseFree, vegan, portion, id}) => {
    
    function getImageUrl(name) {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
      }

    return (
        <div className='card-container-snack flex flex-col w-80 border border-solid rounded-xl p-4'>
            <div className='image-title flex flex-col items-center mb-4'>
                <h1 className='mb-4'>{name}</h1>
                <img src={getImageUrl(img)} alt={altText} className='w-64 h-72 rounded-xl'/>
            </div>
            <div className='content-container flex flex-col mx-4'>
                <div className='description text-justify mb-4'>
                    <p className=''>{description}</p>
                </div>
                <div className='formats-sellos flex gap-14'>
                    <div className='formats'>
                        <ul>
                            <li>Porción: ${portion}</li>
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
                <div className='button flex justify-end mt-4 '>
                <Link href={`/Snacks/${id}`}>
                        <Button className='default-bttn'>Detalles</Button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default SnackCard

SnackCard.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    localProduct: PropTypes.bool,
    glutenFree: PropTypes.bool,
    sugarFree: PropTypes.bool,
    lactoseFree: PropTypes.bool,
    vegan: PropTypes.bool,
    portion: PropTypes.number,
    id: PropTypes.number

}