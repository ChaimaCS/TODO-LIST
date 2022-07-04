import React, { useState } from 'react';
import { addTask} from '../actions/Actions';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        description: text,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setText('');
    }
  };
  return (
    <div>
    <div className= 'input-group mb-2'>
      <input className="form-control" type="text" placeholder='Add new task' value={text}
          onChange={e => setText(e.target.value)} />
      <button className="btn btn-secondary" onClick={handleClick}>
          +
        </button>
    </div>
                      
    </div>
  )
}

export default AddTask