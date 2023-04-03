import styled from "styled-components";
import backMobile from "../../assets/images/backgroundMobile.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;

  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;

  border-left: 5px solid var(--blue-400);

  background-color: var(--blue-800);
  width: calc(100vw - 17vw);

  overflow: auto;

  @media (max-width: 480px) {
    position: relative;
    border-top: 5px solid var(--blue-400);
    border-left: none;
    width: 100vw;
    background-image: url(${backMobile});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
