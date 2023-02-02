import { Box } from "@/components/Box"
import { Form } from "formik"
import { media } from "src/styles/media"
import styled from "styled-components"

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: ${(props) => props.theme.background.primary};
  border: 1px solid ${(props) => props.theme.strokes.secondary};
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  ${media.sm`
    width: 100%;
    max-width: 100%;
    border: none;
  `}
`

export const AuthWrapper = styled(Box)`
  height: calc(100vh - 81px);
  padding-bottom: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.sm`
    justify-content: start;
    height: auto;
  `}
`

export const AuthFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray};
  padding: 23px 29px;
  background: ${(props) => props.theme.background.primary};
  border-top: 1px solid ${(props) => props.theme.strokes.secondary};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  a {
    color: ${(props) => props.theme.txt.color};
  }
`

export const IconBox = styled(Box)`
  width: 25px;
  height: 25px;
  svg {
    width: 100%;
    height: 100%;
  }
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  margin-top: 25px;
`
