import styled from "styled-components";
import SideBackground from "../../assets/images/sideBackground.jpg";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;

  width: 17vw;
  height: 100vh;

  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  background-image: url(${SideBackground});
  background-repeat: no-repeat;
  background-size: cover;

  .profile {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1rem;

    > h2 {
      font-size: 1.7rem;
      text-align: center;
      color: var(--white);
      font-family: "Inter";
    }
    > img {
      border-radius: 1rem;
      height: 13rem;
      object-fit: contain;
    }
  }

  .infosWrapper {
    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    > div {
      display: flex;
      flex-direction: column;

      align-items: center;
      gap: 0.5rem;

      > p {
        color: var(--white);
        font-family: "Roboto";
      }

      > div {
        display: flex;

        gap: 1rem;

        background-color: var(--blue-900);
        color: var(--white);
        padding: 1rem 1.5rem;
        border-radius: 8px;

        > svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }

  .netWrapper {
    display: flex;

    > a {
      text-decoration: none;
      color: var(--white);
      width: 1.5rem;
      height: 1.5rem;

      > svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  #reactSvg {
    color: #007acc;
  }
  #jsSvg {
    color: #f0db4f;
  }
  #nodeSvg {
    color: #81cd39;
  }
`;
