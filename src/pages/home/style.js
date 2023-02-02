import { Box } from "@/components/Box"
import styled from "styled-components"

export const UserList = styled(Box)`
  border-top: 1px solid ${(props) => props.theme.strokes.secondary};
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px 0 30px 0;
  gap: 20px;
`
