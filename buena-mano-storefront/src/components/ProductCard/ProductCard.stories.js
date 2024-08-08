import ProductCard from "./ProductCard";


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
        description: 'Este helado combina una veriedad de texturas y sabores: la suavidad del chocolate Belga, la dulzura del toffe y crujientes bolitas de cereal. Una conbinación perfecta para los que aman sorprenderse con cada probada.', 
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
        description: 'El sabor clásico del chocolate para veganos, intolerantes a la lactosa y quienes quieran probar un helado libre de leche, con la misma suavidad y calidad que el chocolate tradicional.', 
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

