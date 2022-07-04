import {
  ADDTASK,
  DELETETASK,
  EDITTASK,
  SETCURRENTTASK,
  TOGGLECOMPLETEDTASK,ISDONE, SHOWALL, SHOWCOMPLETED, SHOWNOTCOMPLETED
} from './types';

export const addTask = payload => {
  return {
    type: ADDTASK,
    payload,
  };
};
export const editTask = payload => {
  return {
    type: EDITTASK,
    payload,
  };
};

export const deleteTask = payload => {
  return {
    type: DELETETASK,
    payload,
  };
};
export const setCurrentTask = payload => {
  return {
    type: SETCURRENTTASK,
    payload,
  };
};
export const filterTasks = () => {};
export const toggleCompletedTask = payload => {
  return {
    type: TOGGLECOMPLETEDTASK,
    payload,
  };
};

export const isDone = payload => ({
  type: ISDONE,
  payload
})
export const showAll = payload => ({
  type: SHOWALL,
  payload
});

export const showCompleted = payload => ({
  type: SHOWCOMPLETED,
  payload
});

export const showNotCompleted = payload => ({
  type: SHOWNOTCOMPLETED,
  payload
});



