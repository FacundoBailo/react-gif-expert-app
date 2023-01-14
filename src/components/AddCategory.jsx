import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
    
  const [inputValue, setInputValue] = useState('');  

  const onImputChange = ({ target }) =>{
    setInputValue( target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (

    <form onSubmit={ (e) => onSubmit(e) }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange= { onImputChange }
        />
    </form>
  )
}
export default AddCategory