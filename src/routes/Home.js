import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} id={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return { toDos: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
// };
// function과 component를 연결
// 단, 최근에는 connect를 쓰지 않는다 하니, 수정해보자
// useSelector, useDispatch 사용
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
