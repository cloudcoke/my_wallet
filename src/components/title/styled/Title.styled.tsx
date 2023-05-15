import styled from "styled-components"
import { ITitle } from "@interface/Styled.interface"

export const TitleStyled = styled.h1<ITitle>`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  padding: ${({ padding }) => (padding ? padding : "40px")};
`
