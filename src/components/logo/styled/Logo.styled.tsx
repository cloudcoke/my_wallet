import styled from "styled-components"
import { ILogo } from "@interface/Styled.interface"
import logo from "@img/logo.png"

export const LogoStyled = styled.img<ILogo>`
  src: ${({ src }) => (src ? src : logo)};
  width: ${({ width }) => (width ? width : "30px")};
  height: ${({ height }) => (height ? height : "30px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "100px")};
`
