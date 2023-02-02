import { Box } from "@/components/Box"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    width: 100%;
    pointer-events: none;
    border-bottom: 1px solid ${(props) => props.theme.strokes.secondary};
  }
`
