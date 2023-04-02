import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 90%;

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

    gap: 3.5rem;

    width: 100%;

    > div {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2rem;

      height: 16rem;
      width: 20%;

      margin-top: 1rem;

      background-color: var(--blue-900);

      border-radius: 20px;

      border: 1px solid #657be0;
      box-shadow: 0px 3px 16px rgba(101, 123, 224, 0.9);

      > img {
        width: 8rem;
      }
      > p {
        color: var(--white);
        font-family: "Inter";
        font-weight: bold;
        text-align: center;
        width: 70%;
      }
    }
  }
`;
