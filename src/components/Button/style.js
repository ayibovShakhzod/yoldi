import styled, { keyframes } from "styled-components"
import { background, color, flexbox, layout, space, typography, variant } from "styled-system"
import { ReactComponent as loadingIcon } from "src/assets/icons/loading.svg"

export const StyledButton = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;

  ${(props) =>
    variant({
      prop: "btn",
      variants: {
        primary: {
          padding: "12px 33px",
          height: "50px",
          background: props.theme.txt.color,
          borderColor: props.theme.txt.color,
          color: props.theme.background.primary,
        },
        secondary: {
          padding: "7px 33px",
          height: "40px",
          background: props.theme.background.primary,
          borderColor: props.theme.strokes.primary,
          "&:hover, &:active, &:focus": {
            borderColor: props.theme.gray,
          },
        },
      },
    })}

  &:disabled {
    background: ${(props) => props.theme.strokes.primary};
    border-color: ${(props) => props.theme.strokes.primary};
    color: ${(props) => props.theme.background.secondary};
    cursor: not-allowed;
  }

  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
`

const roundRound = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

export const LoadingIcon = styled(loadingIcon)`
  width: 20px;
  height: 20px;
  animation: 1.2s ${roundRound} linear infinite;
`
