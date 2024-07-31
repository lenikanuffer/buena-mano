import PropTypes from 'prop-types'

const SingleDistributor = ({name, address}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{address}</p>
        </div>
    );
};

export default SingleDistributor;

SingleDistributor.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string
}
