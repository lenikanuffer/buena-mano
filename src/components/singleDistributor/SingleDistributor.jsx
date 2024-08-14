import PropTypes from 'prop-types'
import { GeoLocation } from '../../assets/icons/icons';
import './SingleDistributor.css'

const SingleDistributor = ({name, address}) => {
    return (
        <div className='location-container flex text-sm  m-6 items-center	'>
            <div className='icon m-4'>
                <GeoLocation />
            </div>
            <div className='address-container flex-col text-left'>
            <h1 className='location-name'>{name}</h1>
            <p>{address}</p>
            </div>
        </div>
    );
};

export default SingleDistributor;

SingleDistributor.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string
}
