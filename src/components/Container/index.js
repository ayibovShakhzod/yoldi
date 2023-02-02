import { media } from "src/styles/media"
import styled from "styled-components"

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: block;

  ${media.sm`
    padding: 0 20px;
  `}
`
