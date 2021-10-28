import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: {
          title: "What's to be done?",
          add: "Add",
          remove: "Remove All Tasks",
          update: "Update",
          input: "Add some task",
          task_added: "Task Added",
          no_value: "No Value Typed",
          task_removed: "Task Removed",
          task_edited: "Task Edited",
          all_remove: "All Tasks Removed",
          task_completed: "Good job!",
        },
      },
      pl: {
        translation: {
          title: "Co masz do zrobienia?",
          add: "Dodaj",
          remove: "Usuń Wszystkie Zadania",
          update: "Edytuj",
          input: "Dodaj jakieś zadanie",
          task_added: "Dodano Zadanie",
          no_value: "Nie Wpisano Żadnej Wartości",
          task_removed: "Usunięto Zadanie",
          task_edited: "Edytowano Zadanie",
          all_remove: "Usunięto Wszystkie Zadania",
          task_completed: "Dobra robota!",
        },
      },
    },
    detection: {
      order: ["queryString", "path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
