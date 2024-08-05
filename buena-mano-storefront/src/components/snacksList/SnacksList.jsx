import {useState} from 'react';
import { snacks } from '../../assets/data/snacks';
import SnackCard from '../snackscard/SnackCard';
import './SnacksList.css'

const SnacksList = () => {

    const [data] = useState(snacks);

    const availableSnacks = data.filter((snack) => {
        if(snack.inStock == true)
            return snack;
    });

    const availableSnacksList = availableSnacks.map((snack) => {
        return (
        <SnackCard
        key={snack.id}
        name={snack.name}
        img={snack.imageUrl}
        altText={snack.imageText}
        description={snack.description}
        ingredients={snack.ingredients}
        localProduct={snack.localProduct}
        glutenFree={snack.glutenFree}
        sugarFree={snack.sugarFree}
        lactoseFree={snack.lactoseFree}
        vegan={snack.vegan}
        portion={snack.portion}
        />
)
    });

    return (

        <section className='flex flex-col gap-4 my-8 text-sm items-center md:flex-row md:flex-wrap md:mx-8'>
            {availableSnacksList}
        </section>
    )
}

export default SnacksList