import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1rem;

  background-color: var(--blue-700);
  min-height: 100vh;

  justify-content: center;

  > h2 {
    display: flex;
    flex-direction: column;

    align-items: center;

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

  .buttonWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;

    width: 95%;
    left: 2rem;
    height: 4rem;

    background-color: rgba(0, 0, 0, 0.9);
    filter: blur(20px);
    z-index: 2;
  }
  .hidden {
    height: 20rem;
    overflow: hidden;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;

    width: 90%;
    padding: 1rem 1rem 5rem 1rem;
    gap: 2rem;

    > button {
      display: flex;
      position: absolute;
      bottom: 1rem;
      left: 45%;

      align-items: center;
      justify-content: center;

      gap: 0.5rem;
      padding: 0.5rem 1rem;

      font-family: "roboto";

      background-color: var(--blue-400);
      color: var(--white);
      opacity: 1;

      border-radius: 1rem;

      z-index: 3;

      > svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      border-bottom: 2px solid var(--blue-400);

      align-items: center;
      justify-content: space-between;

      padding: 2rem 1rem 1rem 1rem;
      gap: 0.5rem;
      min-height: 12rem;

      font-family: "roboto";

      background-color: var(--blue-900);
      border-radius: 0.5rem;

      &:hover {
        box-shadow: 0px 3px 16px rgba(101, 123, 224, 0.9);
      }

      strong {
        font-size: 1.2rem;
        text-align: center;
        text-transform: capitalize;
        color: var(--white);
      }

      p {
        text-align: center;
        font-size: 0.8rem;
        color: var(--gray);

        margin-top: 0.5rem;
      }

      > div {
        display: flex;

        width: 100%;

        align-items: center;
        justify-content: space-around;

        > p {
          background-color: var(--blue-400);
          color: var(--white);
          padding: 0.7rem 1rem;
          border-radius: 2rem;
        }
      }

      > div > a {
        display: inline-block;
        margin-top: 1rem;
        text-decoration: none;
        font-weight: bold;
        color: var(--white);
      }
    }
  }

  @media (max-width: 1080px) {
    ul {
      grid-template-columns: repeat(2, 1fr);

      > button {
        left: 42%;
      }
    }
    .buttonWrapper {
      width: 90%;
      left: 1rem;
    }
  }

  @media (max-width: 720px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
      > button {
        left: 35%;
      }
    }
    .buttonWrapper {
      width: 80%;
      left: 2rem;
    }
  }
`;
