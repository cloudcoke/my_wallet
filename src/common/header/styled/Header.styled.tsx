import styled from "styled-components"
import { IHeader } from "@interface/Styled.interface"
import colorChip from "@common/color"

export const HeaderStyled = styled.div<IHeader>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "50px")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorChip["blue"].backgroundColor)};
  padding: ${({ padding }) => (padding ? padding : "10px")};
  display: ${({ display }) => (display ? display : "flex")};

  ${({ display, justifyContent, alignItems }) =>
    (display === "flex" || display === undefined) &&
    `justify-content: ${justifyContent ? justifyContent : "flex-start"};
    align-items: ${alignItems ? alignItems : "center"};
    `}

  & > img {
    margin-right: 20px;
  }
`
