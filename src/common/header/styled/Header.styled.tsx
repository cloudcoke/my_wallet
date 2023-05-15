import styled from "styled-components"
import { IHeader } from "@interface/Styled.interface"
import colorChip from "@common/color"

export const HeaderStyled = styled.div<IHeader>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "50px")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colorChip["blue"].backgroundColor)};
`
