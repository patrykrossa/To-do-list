import { useState } from "react";
import Form from "./Form";
import Frm from "./Styles/Form.styled";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";

function List({ tasks, removeTask, editTask, completeTask }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitEdit = (value) => {
    editTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <div>
        <Frm>
          <Form edit={edit} onSubmit={submitEdit} />
        </Frm>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            className={task.isComplete ? "task complete" : "task"}
          >
            <div key={task.id} onClick={() => completeTask(task.id)}>
              <h3>{task.text}</h3>
            </div>
            <div className="icons">
              <IoMdRemoveCircleOutline onClick={() => removeTask(task.id)}>
                remove
              </IoMdRemoveCircleOutline>
              <FiEdit2
                onClick={() => setEdit({ id: task.id, value: task.text })}
              >
                edit
              </FiEdit2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
