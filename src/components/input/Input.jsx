import { useState } from 'react';
import './Input.css';

const Input = (props) => {
    
    const [focused, setFocused] = useState(false);

    const {label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className='flex flex-col w-80  gap-2'>
            <label className= 'text-sm' htmlFor="">{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                className='text-sm border contact-form'
            />
            <span className='error-message'>{errorMessage}</span>
            

        </div>
    )
}


export default Input
