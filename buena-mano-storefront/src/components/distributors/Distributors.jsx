import { useState } from 'react';
import { distributionData } from '../../assets/data/distribution-points';
import SingleDistributor from '../singleDistributor/SingleDistributor';
import './Distributors.css'

const DistributorsList = () => {

    const [data] = useState(distributionData);

    const sellingPoint = data.filter((point)=> {
        if (point.collection == 'Barquillera')
            return point;
    });

    const otherFormats = data.filter((point)=>{
        if (point.collection == 'otros')
            return point;
    });

    const sellingPointsList = sellingPoint.map((point) => {
        return <SingleDistributor
        name={point.name}
        address={point.address}
        key={point.id} />
    });

    const othersFormatsList = otherFormats.map((point) => {
        return <SingleDistributor
        name={point.name}
        address={point.address}
        key={point.id} />
    });

    return (

        <section>
            <div className='barquillera text-sm text-center flex flex-col'>
                <h1 className='mb-4'>BARQUILLERA SIETE SABORES</h1>
                <div>{sellingPointsList}</div>
            </div>
            <div className='others text-sm text-center'>
                <h1 className='mt-8 mb-4'>OTROS FORMATOS</h1>
                <div>{othersFormatsList}</div>

            </div>
        </section>
    );

    };

export default DistributorsList



