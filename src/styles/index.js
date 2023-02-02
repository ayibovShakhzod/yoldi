import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
	body {
			height: 100%;
			width: 100%;
			background-color: ${(props) => props.theme.background.secondary};
			color: ${(props) => props.theme.txt.color};
			font-family: "Inter", sans-serif;
			overflow-x: hidden; 
	}

	a {
    text-decoration: none;
		color: ${(props) => props.theme.txt.color};
	}
`
