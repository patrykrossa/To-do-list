import { useState } from "react";
import Form from "./Form";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import {
  StyledTask,
  StyledTaskCompleted,
  StyledTaskItem,
  StyledTaskText,
  StyledIconsWrapper,
} from "./Styles/List.styled";

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
    return <Form edit={edit} onSubmit={submitEdit} />;
  }

  return (
    <>
      {tasks.map((task, index) => {
        return (
          <>
            {task.isComplete ? (
              <StyledTaskCompleted key={index} isComplete={task.isComplete}>
                <StyledTaskItem
                  key={task.id}
                  onClick={() => completeTask(task.id)}
                >
                  <StyledTaskText>{task.text}</StyledTaskText>
                </StyledTaskItem>
                <StyledIconsWrapper>
                  <IoMdRemoveCircleOutline
                    onClick={() => removeTask(task.id)}
                  />
                  <FiEdit2
                    onClick={() => setEdit({ id: task.id, value: task.text })}
                  />
                </StyledIconsWrapper>
              </StyledTaskCompleted>
            ) : (
              <StyledTask key={index} isComplete={task.isComplete}>
                <StyledTaskItem
                  key={task.id}
                  onClick={() => completeTask(task.id)}
                >
                  <StyledTaskText>{task.text}</StyledTaskText>
                </StyledTaskItem>
                <StyledIconsWrapper>
                  <IoMdRemoveCircleOutline
                    onClick={() => removeTask(task.id)}
                  />
                  <FiEdit2
                    onClick={() => setEdit({ id: task.id, value: task.text })}
                  />
                </StyledIconsWrapper>
              </StyledTask>
            )}
          </>
        );
      })}
    </>
  );
}

export default List;
