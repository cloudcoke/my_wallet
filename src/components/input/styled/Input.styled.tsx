import styled from "styled-components"
import { IInput } from "@interface/Styled.interface"

export const InputStyled = styled.input<IInput>`
  width: ${({ width }) => (width ? width : "360px")};
  height: ${({ height }) => (height ? height : "50px")};
  border: ${({ border }) => (border ? border : "1px solid rgba(0,0,0,0.2)")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "10px")};
  margin: 0 auto;
  padding-left: 20px;
`
