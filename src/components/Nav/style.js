import styled from "styled-components"
import logo from "src/assets/images/logo.png"
import Image from "next/image"
import { media } from "src/styles/media"
import { Text } from "../Typography"

export const Wrapper = styled.nav`
  width: 100%;
  padding: 14px 30px 14px 20px;
  background: ${(props) => props.theme.background.primary};
  border-bottom: 1px solid ${(props) => props.theme.strokes.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
  ${media.sm`
    padding: 14px 20px;
  `}
`

export const Logo = styled(Image).attrs({ src: logo })`
  width: auto;
  height: 50px;
  display: flex;
`

export const Name = styled(Text)`
  margin-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 110px;
`
