import styled, { css } from "styled-components"
import { Box } from "../Box"

export const Banner = styled(Box)`
  background-color: ${(props) => props.theme.background.secondary};
  border-bottom: 1px solid ${(props) => props.theme.strokes.secondary};
  width: 100%;
  height: 200px;
  ${(props) =>
    props.src &&
    css`
      background-image: url(${props.src});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`
