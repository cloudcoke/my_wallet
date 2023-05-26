import { HeaderStyled } from "./styled"
import { IHeader } from "interface"

export const Header: React.FC<IHeader> = ({ children, ...IHeader }) => {
  return <HeaderStyled {...IHeader}>{children}</HeaderStyled>
}
