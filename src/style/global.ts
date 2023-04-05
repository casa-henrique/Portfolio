import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue-900: #040615;
    --blue-800: #080B23;
    --blue-700: #0B1033;
    --blue-400: #6581FF;
    --blue-200: #101637;
    
    --white:#FFFFFF;
    --gray:#BEBEBE;
}

* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
    @media (max-width:1080px) {
        font-size: 93.75%; 
    }
    @media (max-width:720px) {
        font-size: 87.5%; 
    }
 }

 body { 
     background: var(--primary);
     -webkit-font-smoothing: antialiased;
 }

 button { 
     cursor: pointer;
   
     border: none;
     border-radius: 0.4rem;
    
     :hover{
        opacity: 0.8;
    }
 }

 ::-webkit-scrollbar-thumb {
  background-color: #CCCCCC;
  border-radius: 1rem;
}
::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  }
::-webkit-scrollbar-thumb {
  background-color: #DFDFDF;
  border-radius: 1rem;
  }
`;
