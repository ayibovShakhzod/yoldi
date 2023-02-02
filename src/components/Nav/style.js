import styled from "styled-components"
import logo from "src/assets/images/logo.png"
import Image from "next/image"

export const Wrapper = styled.nav`
  width: 100%;
  padding: 14px 20px;
  background: ${(props) => props.theme.background.primary};
  border-bottom: 1px solid ${(props) => props.theme.strokes.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99;
`

export const Logo = styled(Image).attrs({ src: logo })`
  width: auto;
  height: 50px;
  display: flex;
`
