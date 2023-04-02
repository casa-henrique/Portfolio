import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 4rem;
  gap: 1rem;

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

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 90%;
    padding: 1rem;
    gap: 2rem;

    overflow-x: hidden;
    overflow-y: scroll;

    li {
      display: flex;
      flex-direction: column;
      border-bottom: 2px solid var(--white);

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
    }
  }

  @media (max-width: 720px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
