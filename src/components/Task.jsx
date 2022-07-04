import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setCurrentTask,
  deleteTask,
  toggleCompletedTask,
} from '../actions/Actions';

const Task = ({ todo: { id, description, isDone } }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    if (e.target.id === 'edit') {
      dispatch(setCurrentTask({ id, description, isDone }));
    }
    if (e.target.id === 'delete') {
      dispatch(deleteTask(id));
    }

    if (e.target.id === 'DONE') {
      dispatch(toggleCompletedTask(id));
    }
  };
  return (
    <div>
    <li
      className={`list-group-item ${
        isDone && 'list-group-item-success'
      } d-flex align-items-center justify-content-between`}
    >
      <div className={isDone && 'DONE'}>{description}</div>
      <div className="btn-group m-2" role="group">
        <i
          id="DONE"
          className={`fa fa-check p-2 text-${isDone ? 'success' : 'secondary'}`}
          onClick={handleClick} style={{cursor:"pointer"}} 
        >Done</i>
        <i
          id="edit"
          className="fas fa-pen p-2 text-dark "
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={handleClick} style={{cursor:"pointer"}}
        >edit</i>
        <i
          id="delete"
          className="fa fa-trash p-2 text-danger"
          onClick={handleClick} style={{cursor:"pointer"}}
        >delete</i>
      </div>
    </li>
    </div>
  );
};

export default Task;
