import styled from "styled-components"
import { background, border, color, flexbox, layout, position, space, typography, variant } from "styled-system"

export const Text = styled.h2.attrs((props) => {
  type: props.type || "text"
})`
  font-style: normal;

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
      text: {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "160%",
      },
    },
  })}

  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${position}
  ${border}
`
