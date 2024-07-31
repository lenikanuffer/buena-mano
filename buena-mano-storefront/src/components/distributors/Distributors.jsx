import { useState } from 'react';
import { distributionPoints } from '../../assets/data/distribution-points';
import SingleDistributor from '../singleDistributor/SingleDistributor';
import './Distributors.css'

const DistributorsList = () => {

    const [data, setData] = useState(distributionPoints);

    const barquilleraSellingPoints = data.filter(
        (point) => point.collection == 'Barquillera'
    );

    const otherFormats = data.filter(
        (point) => point.collection == 'otros'
    );

    const barquilleraSellingList = barquilleraSellingPoints.map((point, index) => {
        return <SingleDistributor
        key={index}
        name={point.name}
        address={point.address}
        id={point.id} />
    });

    const othersFormatsList = otherFormats.map((point, index) => {
        return <SingleDistributor
        key={index}
        name={point.name}
        address={point.address}
        id={point.id} />
    });

    return (

        <section>
            <div className='barquillera'>
                <h1>Barquillera de siete sabores</h1>
                <div>{barquilleraSellingPoints}</div>
            </div>
            <div className='others'>
                <h1>Otros formatios</h1>
                <div>{othersFormatsList}</div>

            </div>
        </section>
    );

    };

export default DistributorsList



