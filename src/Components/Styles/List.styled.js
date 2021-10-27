import styled from "styled-components";

export const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(167, 115, 33, 1) 0%,
    rgba(124, 93, 7, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  :nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(153, 22, 171, 1) 0%,
      rgba(78, 5, 121, 1) 100%
    );
  }

  :nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(78, 143, 14, 1) 0%,
      rgba(10, 104, 6, 1) 100%
    );
  }

  :nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(22, 61, 171, 1) 0%,
      rgba(17, 4, 122, 1) 100%
    );
  }
`;

export const StyledTaskCompleted = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(167, 115, 33, 1) 0%,
    rgba(124, 93, 7, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  opacity: 0.4;
  text-decoration: line-through;
`;

export const StyledTaskItem = styled.div``;
export const StyledTaskText = styled.h3``;
export const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  IoMdRemoveCircleOutline {
    margin-right: 100px;
    color: #fff;
  }

  FiEdit2 {
    color: #fff;
  }
`;
