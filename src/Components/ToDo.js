import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Mess from "./Mess";
import Global from "../Components/Styles/Global";
import Frm from "./Styles/Form.styled";
import Lst from "./Styles/List.styled";
import Ms from "./Styles/Mess.styled";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [mess, setMess] = useState({
    showMessage: false,
    MessageContext: "",
  });

  const closeMessage = () => {
    setMess({ showMessage: false, MessageContext: "" });
  };

  const addTask = (task) => {
    if (!task.text) {
      setMess({ showMessage: true, MessageContext: "No Value Typed" });
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    setMess({ showMessage: true, MessageContext: "Task Added" });
    //console.log(...tasks);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
    setMess({ showMessage: true, MessageContext: "Task Removed" });
  };

  const editTask = (id, value) => {
    if (!value.text) return;

    setTasks((task) => task.map((item) => (item.id === id ? value : item)));
    setMess({ showMessage: true, MessageContext: "Task Edited" });
  };

  const completeTask = (id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        if (task.isComplete)
          setMess({ showMessage: true, MessageContext: "Good Job!" });
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeAll = () => {
    setTasks([]);
    setMess({ showMessage: true, MessageContext: "All Tasks removed" });
  };

  return (
    <div>
      <Global />
      <div className="app">
        <h1>What's to be done?</h1>
        {mess.showMessage && (
          <Ms>
            <Mess
              closeMessage={closeMessage}
              MessageContext={mess.MessageContext}
            />
          </Ms>
        )}
        <Frm>
          <Form onSubmit={addTask} />
        </Frm>
        <Lst>
          <List
            tasks={tasks}
            removeTask={removeTask}
            editTask={editTask}
            completeTask={completeTask}
          />
        </Lst>
        <button onClick={removeAll} className="remove">
          Remove All Tasks
        </button>
      </div>
    </div>
  );
}

export default ToDo;
