import { useEffect } from "react";

function Mess({ closeMessage, MessageContext }) {
  useEffect(() => {
    setTimeout(() => {
      closeMessage();
    }, 2500);
  });

  return <div>{MessageContext}</div>;
}

export default Mess;
