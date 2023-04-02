import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  gap: 2rem;

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

  #logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .dateLeft {
    margin-left: 2rem;
    font-family: "Inter";
  }
  .dateRight {
    margin-right: 2rem;
    font-family: "Inter";
  }
`;
