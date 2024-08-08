import './Button.css';

const Button = ({children}) => {
    console.log('children', children)
    return <p>{children}</p>
}

export default Button 