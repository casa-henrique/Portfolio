import styled from "styled-components";
import backimg from "../../assets/images/backgroundMobile.png";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  gap: 1rem;

  align-items: center;
  justify-content: center;

  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: cover;
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

export const SkillsTable = styled.div`
  display: flex;

  width: 70vw;

  gap: 1.5rem;

  margin: 0 auto;
  overflow: hidden;
  position: relative;

  .skillsTable {
    display: flex;
    flex-direction: column;
    animation: animate 15s alternate ease-in-out infinite;

    padding: 1rem;
    gap: 1.5rem;

    margin-top: 2rem;

    background-color: var(--blue-900);
    border-radius: 0.5rem;
    border-bottom: 2px solid var(--blue-400);

    :first-child {
      margin-left: 3rem;
    }

    > tr {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      align-items: center;

      column-gap: 2rem;
      row-gap: 2rem;

      > td {
        display: flex;
        flex-direction: column;

        width: 4rem;

        align-items: center;
        text-align: center;
        color: var(--gray);
        font-family: "Roboto";
        font-size: 0.9rem;

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

  :hover .skillsTable {
    animation-play-state: initial;
    animation: teste;
    cursor: grab;

    @keyframes teste {
      0% {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  @keyframes animate {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-1100px, 0, 0);
    }
  }

  @media (max-width: 1080px) {
    width: 70vw;
    border-radius: 0;
    padding: 0;
  }

  @media (max-width: 720px) {
    width: 90vw;
    border-radius: 0;
    padding: 0;

    .skillsTable {
      animation: animate 25s alternate ease-in-out infinite;

      :first-child {
        margin-left: 1rem;
      }
    }

    @keyframes animate {
      0% {
        transform: translate3d(-1550px, 0, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;
