import styled from "styled-components";

const Lst = styled.div`
  .task {
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
  }

  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }

  .task:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(153, 22, 171, 1) 0%,
      rgba(78, 5, 121, 1) 100%
    );
  }

  .task:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(78, 143, 14, 1) 0%,
      rgba(10, 104, 6, 1) 100%
    );
  }

  .task:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(22, 61, 171, 1) 0%,
      rgba(17, 4, 122, 1) 100%
    );
  }

  .icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }

  IoMdRemoveCircleOutline {
    margin-right: 100px;
    color: #fff;
  }

  FiEdit2 {
    color: #fff;
  }
`;

export default Lst;
