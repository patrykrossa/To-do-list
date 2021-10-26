import { useState, useRef, useEffect } from "react";

export default function Form(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime().toString(),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            placeholder={props.edit.value}
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Update</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Add some task"
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      )}
    </form>
  );
}
