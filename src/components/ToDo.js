import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(actionCreators.deleteTodo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDelete}>X</button>
    </li>
  );
}

export default ToDo;
