import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  transform-style: preserve-3d;
  position: relative;
  transition: all 0.1s ease;

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
    position: relative;
    transition: all 0.5s ease;
  }
  > p {
    position: relative;
    color: var(--white);
    font-family: "Inter";
    font-weight: bold;
    text-align: center;
    width: 70%;
    transition: all 0.5s ease;
  }
`;
