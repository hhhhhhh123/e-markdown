import { createContext, Dispatch } from 'react';
import { TodoStateType, TodoActionType } from '../typings/todo';

export const reducer = (state: TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case 'setTableScrollH':
      return { ...state, tableScrollH: action.value };
    case 'setTodoListData':
      return { ...state, todoListData: action.value };
    case 'setFinishedListData':
      return { ...state, finishedListData: action.value };
    case 'setSelectedFinishedRowsKeys':
      return { ...state, selectedFinishedRowsKeys: action.value };
    default:
      return { ...state };
  }
};

interface TodoContextType {
  state: TodoStateType;
  dispatch: Dispatch<TodoActionType>;
}

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const TodoContextProvider = TodoContext.Provider;
