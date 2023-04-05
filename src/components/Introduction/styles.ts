import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 100vh;

  justify-content: center;

  gap: 2rem;

  > h2 {
    display: flex;
    flex-direction: column;

    font-size: 1.8rem;
    font-family: "Inter";
    color: var(--white);
    font-weight: bold;

    > span {
      font-size: 1rem;
      font-weight: 400;
      color: var(--gray);
    }
  }

  > p {
    margin-left: 2rem;
    color: var(--white);
    font-family: "Roboto";
  }

  > div {
    display: flex;

    align-items: center;
    justify-content: center;
    position: relative;

    gap: 3.5rem;
    perspective: 1500px;
    width: 100%;
  }

  @media (max-width: 480px) {
    align-items: center;
    height: auto;
    padding: 4rem 0;
    > h2 {
      text-align: center;
    }
    > p {
      text-align: center;
      margin-left: 0;
      width: 90%;
    }
    > div {
      display: flex;
      flex-direction: column;

      > div {
        width: 90%;
      }
    }
  }
`;
