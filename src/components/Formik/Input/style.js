import styled from "styled-components"

export const PickerWrapper = styled.button`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  color: ${(props) => props.theme.gray};
  border: none;
  outline-color: ${(props) => props.theme.txt.color};
  outline-width: 1px;
  svg {
    width: 100%;
    height: 100%;
  }
`
