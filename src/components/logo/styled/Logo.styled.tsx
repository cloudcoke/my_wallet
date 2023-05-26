import styled from "styled-components"
import { ILogo } from "@interface/Styled.interface"

export const LogoStyled = styled.img<ILogo>`
  src: ${({ src }) => src};
  width: ${({ width }) => (width ? width : "30px")};
  height: ${({ height }) => (height ? height : "30px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "100px")};
`
