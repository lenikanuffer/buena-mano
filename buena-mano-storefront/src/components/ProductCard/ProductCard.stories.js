import ProductCard from "./ProductCard";
import './ProductCard.css'


export default {
    title: 'Components/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
}

export const FullCardNoIcons = {
    args: {
        name: 'Chocolate Buenamano',
        img: 'sabor2.jpg',
        altText: 'Chocolate Buenamano',
        description: 'Este helado combina una veriedad de texturas y sabores: la suavidad del chocolate Belga, la dulzura del toffe y crujientes bolitas de cereal. ', 
        localProduct: false, 
        glutenFree: false, 
        sugarFree: false, 
        lactoseFree: false, 
        vegan: false, 
        scoop: 1000, 
        halfLitre: 3000, 
        litre: 6000
    }
}

export const FullCardIcons = {
    args: {
        name: 'Chocolate vegano',
        img: 'sabor5.jpg',
        altText: 'Chocolate vegano',
        description: 'El sabor clásico del chocolate para veganos, intolerantes a la lactosa y quienes quieran probar un helado libre de leche.', 
        localProduct: false, 
        glutenFree: true, 
        sugarFree: false, 
        lactoseFree: true, 
        vegan: true, 
        scoop: 1000, 
        halfLitre: 3000, 
        litre: 6000
    }
}

