import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  console.log(toDo);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      {/* delete 만들기 */}
      {/* 로컬스토리지에 state 저장, 새로고침해도 남아있도록 */}
    </>
  );
}

export default Detail;
