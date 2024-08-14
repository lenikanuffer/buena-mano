import { useState } from 'react';
import Input from '../input/Input';

import Button from '../button/Button';
import './Form.css';

export const Form = () => {

    const [values, setValues] = useState({
        name: '',
        company: '',
        email:'',
        phone:'',
    });

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Nombre',
            label: 'Nombre',
            errorMessage: 'Campo requerido',
            pattern: '^[A-Za-z0-9]{3,16}',
            required: true,
        },

        {
            id: 2,
            name: 'company',
            type: 'text',
            placeholder: 'Empresa',
            label: 'Empresa',
            required: false,
            
        },

        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'email',
            label: 'email',
            errorMessage:'Campo requerido',
            required: true,
        },

        {
            id: 4,
            name: 'phone',
            type: 'text',
            placeholder: '+ 56 123 456 78',
            label: 'Teléfono',
            required: false,
            
        },

  

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    const onChange= (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    return (
    <div>
        <form  onSubmit={handleSubmit} className='flex flex-col w-80  gap-2'>
            {inputs.map((input) => (
                <Input 
                key={input.id} 
                {...input} 
                value={values[input.name]}
                onChange={onChange}/>
            ))}
            <label htmlFor="message" className='text-sm'>Tu mensaje</label>
            <textarea className='contact-form border border-solid-bm' rows='6' placeholder='Tu mensaje' name='message'></textarea>
           
         
             <Button className='default-bttn button-bm w-1/4 text-white self-end'> Submit</Button>
        </form>
    </div>
    );
};


export default Form