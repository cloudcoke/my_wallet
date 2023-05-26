import { HashStyled } from "./styled"
import { IHash } from "interface"

export const Hash: React.FC<IHash> = ({ children, ...IHash }) => {
  return <HashStyled {...IHash}>{children}</HashStyled>
}
