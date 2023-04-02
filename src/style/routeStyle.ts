import styled from "styled-components";

export const RouteWrapper = styled.body`
  display: flex;
  width: 100vw;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
