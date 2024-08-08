import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


      /* Styling the main scrollbar */
   ::-webkit-scrollbar {
        width: 0.3rem;  /* Width of the scrollbar */
    }

/* Styling the thumb part of the scrollbar */
::-webkit-scrollbar-thumb {
  background-color: grey;  /* Color of the scrollbar thumb */
  border-radius: 5px;      /* Rounded corners for the thumb */
}



`