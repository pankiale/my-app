
const Input = ({placeholder, handleChange}) => {

    const handleOnChange = (e) => {
        if (handleChange) {
            handleChange(e.target.value)
        }
    }

    return (
        <input 
        className={"input"}
        placeholder={placeholder}
        onChange={handleOnChange}
        />
    )
}

export default Input;