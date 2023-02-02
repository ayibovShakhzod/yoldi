import styled from "styled-components"
import { variant } from "styled-system"
import { Box } from "../Box"

export const Wrapper = styled(Box)`
  background: ${(props) => props.theme.background.secondary};
  border: 1px solid ${(props) => props.theme.strokes.secondary};
  border-radius: 999999px;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${variant({
    prop: "size",
    variants: {
      small: {
        width: "50px",
        height: "50px",
        fontSize: "18px",
      },
      large: {
        width: "100px",
        height: "100px",
        fontSize: "36px",
      },
    },
  })}
`
