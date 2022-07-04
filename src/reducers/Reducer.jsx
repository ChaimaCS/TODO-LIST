import {
  ADDTASK,
  DELETETASK,
  EDITTASK,
  SETCURRENTTASK,
  TOGGLECOMPLETEDTASK,ISDONE, SHOWALL, SHOWCOMPLETED, SHOWNOTCOMPLETED
} from '../actions/types';

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case EDITTASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case DELETETASK:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    case TOGGLECOMPLETEDTASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case SETCURRENTTASK:
      return {
        ...state,
        current: payload,
      };
    
      case ISDONE:
    return {
      ...state, 
      todos:state.todos.filter((todo) => (todo.id === payload) ? {...todo, isdone: !todo.isdone} : todo)
    }
    case SHOWALL:
    return {
      ...state,
      filteredTodos:[]

    }

    case SHOWCOMPLETED: 
    return {...state,
      filteredTodos:
        payload === "COMPLETED" ? state.todos.filter(todo => todo.isDone): "ALL TASKS ARE COMPLETED"
      ,
    }
    
    case SHOWNOTCOMPLETED:
    return {...state,
      filteredTodos: state.todos.filter(todo => todo.isDone === false )
    }
           
    default:
      return state;
  }
};

export default Reducer;

