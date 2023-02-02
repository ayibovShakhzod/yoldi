import { Box } from "@/components/Box"
import { Text } from "@/components/Typography"
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

export const Name = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 70px);
`
