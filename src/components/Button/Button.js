import './Button.css'

const Button = ({title, children}) => {
    return (
        <button className='button'>
            {children}
        </button>
    )
}

export default Button;
