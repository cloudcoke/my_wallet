import styled from "styled-components"
import { IText } from "interface"

export const TextStyled = styled.div<IText>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ color }) => (color ? color : "rgba(0, 0, 0, 0.4);")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "23px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "40px")};
  text-align: center;
`
