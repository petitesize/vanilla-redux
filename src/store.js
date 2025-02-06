import { configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer(
//   localStorage.getItem("toDo") !== null
//     ? JSON.parse(localStorage.getItem("toDo"))
//     : [],
//   (builder) => {
//     builder
//       // state.push()는 기존 state를 직접 변경 → return 없이 사용
//       .addCase(addToDo, (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//       })
//       // state.filter()는 새로운 state를 생성 → 반드시 return 사용
//       .addCase(deleteToDo, (state, action) =>
//         state.filter((toDo) => toDo.id !== action.payload)
//       );
//   }
// );

const toDos = createSlice({
  name: "toDosReducer",
  initialState:
    localStorage.getItem("toDo") !== null
      ? JSON.parse(localStorage.getItem("toDo"))
      : [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

const setTodoInLocalStorage = () => {
  // 1. 현재 state가져옴
  const state = store.getState();
  // 2. 로컬스토리지에 현재 state를 저장해줌, state는 배열이니까 문자열로 바꿔서 저장
  localStorage.setItem("toDo", JSON.stringify(state));
};

// subscribe는 state가 변경될 때 실행될 함수를 지정 가능
// 따라서 state(Todo)가 변경될 때 로컬스토리지에 현재 state를 저장해줄 함수를 지정해준다.
store.subscribe(setTodoInLocalStorage);

export const { add, remove } = toDos.actions;

export default store;
