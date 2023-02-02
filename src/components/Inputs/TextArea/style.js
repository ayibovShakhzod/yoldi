import styled, { css } from "styled-components"

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: inherit;
  background: transparent;
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: text;
  padding: 12px 20px;
  background: ${(props) => props.theme.background.primary};
  border: 1px solid ${(props) => props.theme.strokes.primary};
  border-radius: 5px;
  color: ${(props) => props.theme.txt.color};

  &:focus-within {
    border-color: ${(props) => props.theme.gray};
  }

  ${(props) =>
    props.isError &&
    css`
      border-color: ${props.theme.error} !important;
      color: ${props.theme.error};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: ${props.theme.background.secondary};
      border-color: ${props.theme.background.secondary};
      color: ${props.theme.gray};
      &,
      * {
        cursor: not-allowed;
      }
    `}
`
