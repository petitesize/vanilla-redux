import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (
  state = localStorage.getItem("toDo") !== null
    ? JSON.parse(localStorage.getItem("toDo")) // 로컬스토리지에서 가져오면 문자열이기 때문에, 배열로 변환
    : [],
  action
) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const setTodoInLocalStorage = () => {
  // 1. 현재 state가져옴
  const state = store.getState();
  // 2. 로컬스토리지에 현재 state를 저장해줌, state는 배열이니까 문자열로 바꿔서 저장
  localStorage.setItem("toDo", JSON.stringify(state));
};

// subscribe는 state가 변경될 때 실행될 함수를 지정 가능
// 따라서 state(Todo)가 변경될 때 로컬스토리지에 현재 state를 저장해줄 함수를 지정해준다.
store.subscribe(setTodoInLocalStorage);

export const actionCreators = {
  addToDo,
  deleteTodo,
};

export default store;
