import styled from "styled-components"
import { IFooter } from "@interface/Styled.interface"
import colorChip from "@common/color"

export const FooterStyled = styled.div<IFooter>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100px")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorChip["blue"].backgroundColor)};
  display: ${({ display }) => (display ? display : "flex")};

  ${({ display, justifyContent, alignItems }) =>
    (display === "flex" || display === undefined) &&
    `
    justify-content: ${justifyContent ? justifyContent : "center"};
    align-items: ${alignItems ? alignItems : "center"};
  `}

  & > button {
    width: ${({ width }) => (width ? width : "50px")};
    height: ${({ height }) => (height ? height : "50px")};
  }
`
