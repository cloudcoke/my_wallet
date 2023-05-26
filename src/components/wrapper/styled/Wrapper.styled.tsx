import styled from "styled-components"
import { IWrap } from "interface"

export const WrapperStyled = styled.div<IWrap>`
  display: ${({ display }) => (display ? display : "flex")};

  ${({ display, justifyContent, alignItems, flexDirection }) =>
    (display === "flex" || display === undefined) &&
    `
  justify-content: ${justifyContent ? justifyContent : "space-around"};
  align-items: ${alignItems ? alignItems : "center"};
  flex-direction: ${flexDirection ? flexDirection : "row"};
`}
`
