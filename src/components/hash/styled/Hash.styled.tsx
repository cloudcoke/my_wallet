import styled from "styled-components"
import { IHash } from "@interface/Styled.interface"

export const HashStyled = styled.div<IHash>`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  color: ${({ color }) => (color ? color : "#000000")};
  border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : "none")};
  margin: ${({ margin }) => (margin ? margin : "0 auto;")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
