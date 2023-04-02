import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  gap: 1rem;

  align-items: center;

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
`;

export const Table = styled.div`
  display: grid;

  width: 90%;

  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);

  .skillsTable {
    display: flex;
    flex-direction: column;

    padding: 1rem;
    gap: 1.5rem;

    margin-top: 2rem;

    background-color: var(--blue-900);
    border-radius: 0.5rem;
    border-bottom: 2px solid var(--blue-400);

    > tr {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      align-items: center;

      column-gap: 2rem;
      row-gap: 2rem;

      > td {
        display: flex;
        flex-direction: column;

        align-items: center;
        text-align: center;
        color: var(--gray);
        font-family: "Roboto";
        font-size: 0.8rem;

        gap: 1rem;

        > img {
          width: 50%;
          object-fit: contain;
          aspect-ratio: 4/4;
        }
      }

      > th {
        font-weight: bold;
        font-family: "Roboto";
        color: var(--white);
      }
    }
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
