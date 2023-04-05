import styled from "styled-components";
import bcgImg from "../../assets/images/backgroundExperience3.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #29304f;
  position: relative;

  padding: 8rem 0;
  gap: 2rem;

  height: auto;
  width: 100%;

  :before {
    content: " ";
    background-image: url(${bcgImg});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }

  > h2 {
    display: flex;
    flex-direction: column;

    align-items: center;

    font-size: 1.8rem;
    font-family: "Inter";
    color: var(--white);
    font-weight: bold;
    z-index: 2;

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

  .my-card {
    background-color: var(--blue-900);
    border-bottom: 2px solid var(--blue-400);
    padding: 1rem;
  }
  .my-title {
    color: var(--white);
    font-family: "Roboto";

    @media (max-width: 480px) {
      text-align: center;
      padding: 0;
      text-overflow: ellipsis;
    }
  }
  .my-card-title {
    color: var(--white);
    text-decoration: none;
    font-family: "Inter";
    font-size: 1.3rem;
  }
  .my-card-subtitle {
    color: var(--white);
    font-family: "roboto";
  }
  a {
    cursor: default;
    text-decoration: none;
  }
  .my-card-text {
    > p {
      font-family: "roboto";
      color: var(--white);
    }
  }
  .my-controls {
  }
`;
