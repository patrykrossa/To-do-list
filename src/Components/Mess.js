import { useEffect } from "react";
import { StyledMessage } from "./Styles/Mess.styled";

function Mess({ closeMessage, MessageContext }) {
  useEffect(() => {
    setTimeout(() => {
      closeMessage();
    }, 2500);
  });

  return <StyledMessage>{MessageContext}</StyledMessage>;
}

export default Mess;
