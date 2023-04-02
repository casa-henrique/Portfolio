import styled from "styled-components";

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
`;
