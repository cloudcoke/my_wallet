import { FooterStyled } from "./styled"
import { IFooter } from "@interface/Styled.interface"

export const Footer: React.FC<IFooter> = ({ children, ...IFooter }) => {
  return <FooterStyled {...IFooter}>{children}</FooterStyled>
}
