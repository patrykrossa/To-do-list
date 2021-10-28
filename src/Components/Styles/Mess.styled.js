import styled from "styled-components";

export const StyledMessage = styled.div`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: linear-gradient(
    90deg,
    rgba(42, 238, 9, 1) 0%,
    rgba(11, 126, 41, 1) 100%
  );
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  text-transform: capitalize;
`;
