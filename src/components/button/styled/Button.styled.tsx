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
      : colorChip["red"].backgroundColor};

  &:hover {
    background: ${({ backgroundColor }) =>
      backgroundColor ? colorChip[backgroundColor as keyof typeof colorChip].hover : colorChip["red"].hover};
  }

  & > svg {
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
  }
`
