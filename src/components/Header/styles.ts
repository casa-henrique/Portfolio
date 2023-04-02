import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: var(--blue-700);
  padding: 3rem 2rem;
  gap: 1rem;

  > h1 {
    color: var(--white);
    font-family: "Inter";

    > span {
      color: var(--blue-400);
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;

    > img {
      width: 2.5rem;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      :hover {
        border: 2px solid var(--blue-400);
        border-radius: 100%;
      }
    }
  }

  .selected {
    border: 2px solid var(--blue-400);
    border-radius: 100%;
  }
`;
