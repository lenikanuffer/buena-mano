import Slider from 'react-slick';
import {useState} from 'react';
import {iceCreams} from '../../assets/data/ice-cream';
import PreviewCard from '../previewCard/PreviewCard';
import './ProductsPreview.css'

const ProductsPreview = () => {

    const [data] = useState(iceCreams);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.4,
        slidesToScroll: 2,
        
    
              };
    

    const previewFlavours = data.filter((flavour) => {
        if(flavour.inStock == true)
            return flavour;
    });


    const previewFlavoursList = previewFlavours.map((flavour, index) => {
        return (
           
        <PreviewCard
        key={index}
        name={flavour.name}
        img={flavour.imageUrl}
        altText={flavour.imageText}
        scoop={flavour.scoop}
        halfLitre={flavour.halfLitre}
        litre={flavour.litre}
        />
        
        )
           
   });


    return (
       
        <section className='slider-container mt-8 mb-12 mx-2 '>
               <Slider {...settings} >
            {previewFlavoursList}
            </Slider>
        
        </section>
       
      
    )
}

export default ProductsPreview