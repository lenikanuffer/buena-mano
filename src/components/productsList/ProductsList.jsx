import {useState} from 'react';
import {iceCreams} from '../../assets/data/ice-cream';
import ProductCard from '../productCard/ProductCard';
import './ProductsList.css'

const ProductsList = () => {

    const [data] = useState(iceCreams);

    const availableFlavours = data.filter((flavour) => {
        if(flavour.inStock == true)
            return flavour;
    });

    const availableFlavoursList = availableFlavours.map((flavour) => {
        return (
        <ProductCard
        key={flavour.id}
        name={flavour.name}
        img={flavour.imageUrl}
        altText={flavour.imageText}
        description={flavour.description}
        ingredients={flavour.ingredients}
        localProduct={flavour.localProduct}
        glutenFree={flavour.glutenFree}
        sugarFree={flavour.sugarFree}
        lactoseFree={flavour.lactoseFree}
        vegan={flavour.vegan}
        scoop={flavour.scoop}
        halfLitre={flavour.halfLitre}
        litre={flavour.litre}
        productLink={flavour.productLink}
        id={flavour.id}
        />
)
    });

    return (

        <div className='flex flex-col gap-4 my-8 text-sm items-center md:flex-row md:flex-wrap md:gap-10 md:justify-center'>
            {availableFlavoursList}
        </div>
    )
}

export default ProductsList