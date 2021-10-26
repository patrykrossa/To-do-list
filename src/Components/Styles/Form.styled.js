import styled from "styled-components";

const Frm = styled.form`
  margin-bottom: 32px;

  div input {
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid rgba(204, 40, 40, 1);
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
  }

  div input::placeholder {
    color: #e2e2e2;
  }

  div button {
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(204, 40, 40, 1) 0%,
      rgba(126, 11, 37, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
  }
`;

export default Frm;
