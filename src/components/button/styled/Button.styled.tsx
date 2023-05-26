import styled from "styled-components"
import { IButton } from "interface"
import colorChip from "@common/color"

export const ButtonStyled = styled.button<IButton>`
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "50px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "10px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? colorChip[backgroundColor as keyof typeof colorChip].backgroundColor
      : colorChip["blue"].backgroundColor};
  border: none;
  color: ${({ color }) => (color ? color : "#ffffff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  margin: 0 auto;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};

  &:hover {
    background: ${({ backgroundColor }) =>
      backgroundColor ? colorChip[backgroundColor as keyof typeof colorChip].hover : colorChip["blue"].hover};
  }

  & > a > svg {
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
  }
`
