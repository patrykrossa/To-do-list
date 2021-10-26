import ToDo from "./Components/ToDo";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "To-do list";
  });

  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
