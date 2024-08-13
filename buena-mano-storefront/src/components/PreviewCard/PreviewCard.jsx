import PropTypes from 'prop-types';
import './PreviewCard.css';


const PreviewCard = ({name, img, altText, scoop, halfLitre, litre}) => {
    
    function getImageUrl(name) {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
      }

    return (

        <div className='preview-container flex flex-col w-72 h-72 items-center'>
            <img src={getImageUrl(img)} alt={altText} className='w-36 h-36 rounded-xl  preview-img self-center mt-4' />
           
            <div className='flex flex-col mx-3 mt-2 w-36'>
            <h1 className='flavour '>{name}</h1>
            <ul className='my-3'>
                <li className='formats'>Bola: ${scoop}</li>
                <li className='formats'>1/2 litro: ${halfLitre}</li>
                <li className='formats'>Litro: ${litre}</li>
            </ul>
            </div>
        </div>
       
    );
};

export default PreviewCard

PreviewCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    scoop: PropTypes.number,
    halfLitre: PropTypes.number,
    litre: PropTypes.number
}