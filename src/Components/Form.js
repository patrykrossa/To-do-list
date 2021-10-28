import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledFormWrapper,
  StyledButton,
  StyledInput,
} from "./Styles/Form.styled";

export default function Form(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const { t } = useTranslation();

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
    <StyledFormWrapper onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <StyledInput
            type="text"
            placeholder={props.edit.value}
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <StyledButton onClick={handleSubmit}>{t("update")}</StyledButton>
        </>
      ) : (
        <>
          <StyledInput
            type="text"
            placeholder={t("input")}
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <StyledButton onClick={handleSubmit}>{t("add")}</StyledButton>
        </>
      )}
    </StyledFormWrapper>
  );
}
