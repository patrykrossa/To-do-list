import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 4.5rem;
  padding: 16px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 3px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(7, 9, 206, 1) 0%,
    rgba(50, 70, 173, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export const StyledTitle = styled.h1`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
`;

export const StyledRemoveButton = styled.button`
  margin: 32px 0;
  color: #fff;
  font-size: 16px;
  margin: 20px;
  align: center;
  padding: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(204, 40, 40, 1) 0%,
    rgba(126, 11, 37, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;
