import styled from "styled-components"
import { IBox } from "interface"

export const BoxStyled = styled.div<IBox>`
  width: ${({ width }) => (width ? width : "360px")};
  height: ${({ height }) => (height ? height : "80px")};
  border: ${({ border }) => (border ? border : "1px solid rgba(0,0,0,0.2)")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "10px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  position: ${({ position }) => (position ? position : "relative")};
  display: ${({ display }) => (display ? display : "flex")};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "32px")};

  ${(props) =>
    (props.display === "flex" || props.display === undefined) &&
    `justify-content: ${props.justifyContent ? props.justifyContent : "center"};
    align-items: ${props.alignItems ? props.alignItems : "center"};`}

  & > svg {
    position: absolute;
    left: 20px;
    width: 30px;
    height: 30px;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
