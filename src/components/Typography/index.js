import styled from "styled-components"
import { background, border, color, flexbox, layout, position, space, typography, variant } from "styled-system"

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  ${variant({
    prop: "type",
    variants: {
      title: {
        fontWeight: "500",
        fontSize: "30px",
        lineHeight: "140%",
      },
      subTitle: {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "140%",
      },
      mini: {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "160%",
      },
      btn: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "160%",
      },
    },
  })}
  overflow-wrap: break-word;
  word-wrap: break-word;

  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${position}
  ${border}
`
