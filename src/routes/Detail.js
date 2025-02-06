import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const onDelete = () => {
    dispatch(remove(parseInt(id)));
    navigate("/");
  };
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      {/* delete 만들기 */}
      {/* 로컬스토리지에 state 저장, 새로고침해도 남아있도록 */}
      <button onClick={onDelete}>X</button>
    </>
  );
}

export default Detail;
