



import {useState} from 'react';
import {iceCreams} from '../../assets/data/ice-cream';
import PreviewCard from '../PreviewCard/PreviewCard';
import './ProductsPreview.css'

const ProductsPreview = () => {

    const [data] = useState(iceCreams);


    const previewFlavours = data.filter((flavour) => {
        if(flavour.inStock == true)
            return flavour;
    });

    const previewFlavoursList = previewFlavours.map((flavour) => {
        return (
        <PreviewCard
        key={flavour.id}
        name={flavour.name}
        img={flavour.imageUrl}
        altText={flavour.imageText}
        scoop={flavour.scoop}
        halfLitre={flavour.halfLitre}
        litre={flavour.litre}
        />)
    });


    return (
       
        
        <section className='flex gap-1 my-8 mx-4 text-sm items-center md:mx-8 '>
             
    
            {previewFlavoursList}
         
     
        </section>
       
      
    )
}

export default ProductsPreview