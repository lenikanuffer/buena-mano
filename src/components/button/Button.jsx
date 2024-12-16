import './Button.css';

/** Primary UI component for user interaction */
/** Use `children`to pass in new text */


const Button = ({children, className}) => {

    return (
        < button
            className= {className}
        >{children}</button>
    )
   
}

export default Button 