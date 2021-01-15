import React, {useState, useEffect, useRef, useContext} from 'react'
import NotesContext from  '../context';
const AddNote = () => {
    const { state, dispatch } = useContext(NotesContext);
    const [value, setValue] = useState('');

    
  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Cannot add a blank note');
    } else {
      dispatch({ type: 'ADD_NOTE', payload: value });
      setValue('');
    }
  };
  
    return (
        <div className="note-form"> 
       <form onSubmit={handleSubmit} >
        <input type='text' ref={ref} onChange={handleChange} value={value} />
        <button>Add note</button>
      </form>   
        </div>
    )
}

export default AddNote
