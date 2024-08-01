import PropTypes from 'prop-types';
import './ProductCard.css'

const ProductCard = ({name, img, altText, description, localProduct, glutenFree, sugarFree, lactoseFree, vegan, scoop, halfLitre, litre}) => {
    
    function getImageUrl(name) {
        return new URL(name, import.meta.url).href
      }

    return (
        <div className='card-container flex flex-col'>
            <div className='image-title flex felx-col'>
                <h1>{name}</h1>
                <img src={getImageUrl(img)} alt={altText} />
            </div>
            <div className='content-container flex flex-col'>
                <div className='description'>
                    <p>{description}</p>
                </div>
                <div className='formats-sellos flex'>
                    <div className='formats'>
                        <h1>FORMATOS</h1>
                        <ul>
                            <li>Bola: ${scoop}</li>
                            <li>1/2 litro: ${halfLitre}</li>
                            <li>Litro: ${litre}</li>
                        </ul>
                    </div>
                    <div className='sellos'>
                        <ul>
                            <li>{localProduct}</li>
                            <li>{glutenFree}</li>
                            <li>{sugarFree}</li>
                            <li>{lactoseFree}</li>
                            <li>{vegan}</li>
                        </ul>
                    </div>
                    <div className='button'>
                        <button>Detalles</button>
                    </div>
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