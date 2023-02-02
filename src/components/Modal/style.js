import { media } from "src/styles/media"
import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99999999;
  ${media.sm`
    justify-content: start;
    z-index: 9;
    top: 79px;
  `}
`

export const BgOverlay = styled.div`
  background: ${(props) => props.theme.txt.color};
  cursor: pointer;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 30px;
  height: auto;
  max-width: 600px;
  width: 100vw;
  background: ${(props) => props.theme.background.primary};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.strokes.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  ${media.sm`
    height: calc(100% - 79px);
    border: none;
    border-radius: 0;
    padding: 30px 20px;
    justify-content: start;
  `}
`
