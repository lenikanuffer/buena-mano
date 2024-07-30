import { Local } from '../../assets/icons/icons'

import './Products.css'


function Products() {
    return (
    <>
     <div className='product-container flex flex-col'>
        <div className='image-container flex flex-col items-center gap-5 p-5 pb-10'>
            <h1 className='text-sm text-center text-white'>CARAMELO SALADO</h1>
            <img src="/src/assets/images/sabor4.png" alt="" className='w-80 rounded-lg ' />
        </div>
        <div className='description-icons-container flex text-sm m-5 gap-5'>
            <div className='description text-justify w-2/4'>
                <p>This icecream is Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque dolor, non id impedit animi fugiat minus consequatur deserunt veritatis assumenda? Totam reprehenderit quidem, perspiciatis ea maiores delectus a cupiditate!</p>
            </div>
            <div className='icons-list text-xs'>
                <ul className='flex flex-col gap-2 sellos'>
                    <li> <Local /> Ingredientes locales</li>
                    <li>Libre de azúcar</li>
                    <li>Libre de gluten</li>
                    <li>Libre de lactosa</li>
                    <li>Vegan</li>
                </ul>
            </div>

        </div>

     </div>
       </>
    )
}

export default Products