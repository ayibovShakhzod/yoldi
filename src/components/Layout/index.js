import styled from "styled-components"
import { Box } from "../Box"

export const Layout = styled(Box)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background.primary};
  min-height: calc(100vh - 81px);
`
