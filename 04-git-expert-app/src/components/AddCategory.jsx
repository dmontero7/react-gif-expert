import { useState } from "react";
import PropTypes from 'prop-types'

// export const AddCategory = ({setCategories}) => {
//     const [inputValue, setInputValue] = useState();
//     const onInputChange = (event) => {
//         setInputValue(event.target.value);
//     }

//     const onSubmit = (event) => {
//         event.preventDefault();
//         if(inputValue.trim().length <=1) return;
//         setCategories(categories => [inputValue,...categories]);
//         setInputValue('');
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <input
//                 type="text"
//                 placeholder="Buscar gifs"
//                 onChange={(event) => onInputChange(event)}
//                 value={inputValue} />
//         </form>

//     )
// }
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={(event) => onInputChange(event)}
                value={inputValue} />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired
}