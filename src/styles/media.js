/*
 * Media queries utility
 */

import { css } from "styled-components"
import { breakpoints } from "./theme"

// Iterate through the breakpoints and create a media template
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(first, ...interpolations)}
    }
  `

  return acc
}, {})

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.md`
    display: block
  `}
`;
*/
