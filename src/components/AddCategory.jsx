import { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {
    
  const [inputValue, setInputValue] = useState('');  

  const onImputChange = ({ target }) =>{
    setInputValue( target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (

    <form onSubmit={ (e) => onSubmit(e) } aria-label="form">
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange= { onImputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
export default AddCategory