import { createGlobalStyle } from "styled-components"
import { media } from "./media"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: "Inter", sans-serif;
  }

  html,
	body {
			height: 100%;
			width: 100%;
			background-color: ${(props) => props.theme.background.secondary};
			color: ${(props) => props.theme.txt.color};
			overflow-x: hidden; 
	}

	a {
    text-decoration: none;
		color: ${(props) => props.theme.txt.color};
	}

	${media.sm`
	html,
	body {
		background-color: ${(props) => props.theme.background.primary};
	}
	`}
`
