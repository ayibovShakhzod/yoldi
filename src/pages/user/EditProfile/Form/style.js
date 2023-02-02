import { Box } from "@/components/Box"
import { Form } from "formik"
import { media } from "src/styles/media"
import styled from "styled-components"

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  margin-top: 25px;
`

export const SlugDomainBox = styled(Box)`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.gray};
  border: 1px solid ${(props) => props.theme.strokes.primary};
  border-right: none;
  padding: 12px 20px;
  border-radius: 5px 0 0 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  height: 50px;
  line-height: 160%;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  ${media.sm`
    border-radius: 5px 5px 0 0;
    width: 100%;
    border: 1px solid ${(props) => props.theme.strokes.primary};
    border-bottom: none;
  `}
`
