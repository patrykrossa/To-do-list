import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Mess from "./Mess";
import Global from "../Components/Styles/Global";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  StyledButton,
  StyledApp,
  StyledTitle,
  StyledRemoveButton,
} from "../Components/Styles/ToDo.styled";
import cookies from "js-cookie";

function ToDo() {
  console.log(document.width);
  if (document.width < 700) document.width = 520;

  const [tasks, setTasks] = useState([]);
  const [mess, setMess] = useState({
    showMessage: false,
    MessageContext: "",
  });

  const [lng, setLng] = useState("PL");

  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  const closeMessage = () => {
    setMess({ showMessage: false, MessageContext: "" });
  };

  const addTask = (task) => {
    if (!task.text) {
      setMess({ showMessage: true, MessageContext: t("no_value") });
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    setMess({ showMessage: true, MessageContext: t("task_added") });
  };

  const removeTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
    setMess({ showMessage: true, MessageContext: t("task_removed") });
  };

  const editTask = (id, value) => {
    if (!value.text) return;

    setTasks((task) => task.map((item) => (item.id === id ? value : item)));
    setMess({ showMessage: true, MessageContext: t("task_edited") });
  };

  const completeTask = (id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        if (task.isComplete)
          setMess({ showMessage: true, MessageContext: t("task_completed") });
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeAll = () => {
    setTasks([]);
    setMess({ showMessage: true, MessageContext: t("all_remove") });
  };

  return (
    <>
      <Global />
      <StyledButton
        onClick={() => {
          if (currentLanguageCode === "pl") {
            i18next.changeLanguage("en");
            setLng("PL");
          } else {
            i18next.changeLanguage("pl");
            setLng("ENG");
          }
        }}
      >
        {lng}
      </StyledButton>

      {mess.showMessage && (
        <Mess
          closeMessage={closeMessage}
          MessageContext={mess.MessageContext}
        />
      )}

      <StyledApp>
        <StyledTitle>{t("title")}</StyledTitle>

        <Form onSubmit={addTask} />

        <List
          tasks={tasks}
          removeTask={removeTask}
          editTask={editTask}
          completeTask={completeTask}
        />

        <StyledRemoveButton onClick={removeAll}>
          {t("remove")}
        </StyledRemoveButton>
      </StyledApp>
    </>
  );
}

export default ToDo;
