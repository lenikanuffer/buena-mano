import { Local, SugarFree, GlutenFree } from '../../assets/icons/icons'

import './Products.css'


function Products() {
    return (
    <>
     <div className='product-container flex flex-col md:flex-row md:items-start '>
        <div className='image-container flex flex-col items-center gap-5 p-5 pb-10 md:w-2/6 md:bg-white '>
            <h1 className='text-sm text-center text-white md:text-black'>CARAMELO SALADO</h1>
            <img src="/src/assets/images/sabor4.jpg" alt="" className='w-80 rounded-lg' />
        </div>
        <div className='description-icons-container flex text-sm m-5 gap-5 md:w-2/6 md:mt-14'>
            <div className='description text-justify w-2/4'>
                <p>This icecream is Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque dolor, non id impedit animi fugiat minus consequatur deserunt veritatis assumenda? Totam reprehenderit quidem, perspiciatis ea maiores delectus a cupiditate!</p>
            </div>
            <div className='icons-list text-xs '>
                <ul className='flex flex-col gap-2  sellos'>
                    <li className='flex gap-3'> <Local /> Ingredientes locales</li>
                    <li className='flex gap-3'> <SugarFree />Libre de azúcar</li>
                    <li className='flex gap-3'> <GlutenFree />Libre de gluten</li>
                    <li className='flex gap-3'> <SugarFree />Libre de lactosa</li>
                    <li className='flex gap-3'> <SugarFree />Vegan</li>
                </ul>
            </div>
        </div>
        <div className='ingredients-formats flex text-sm m-5 gap-5 md:mt-14'>
            <div className='ingredients text-justify w-2/4'>
                <p className='text-sm mb-2'>INGREDIENTES</p>
                <p className='sellos'>Leche, azúcar, chocolate, manjar, merengue, coco, huevo.</p>
            </div>
            <div className='formats'>
                <p className='text-sm mb-2'>FORMATOS</p>
                <ul className='sellos'>
                    <li>Bola:</li>
                    <li>1/2 litro:</li>
                    <li>Litro:</li>
                </ul>
            </div>
        </div>
     </div>
     <aside>
        <h1 className='flex text-xs justify-center mt-14'>PRODUCTOS RECOMENDADOS</h1>
     </aside>
       </>
    )
}

export default Products