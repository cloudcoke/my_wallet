import { BoxStyled } from "./styled"
import { IBox } from "interface"

export const Box: React.FC<IBox> = ({ children, ...IBox }) => {
  return <BoxStyled {...IBox}>{children}</BoxStyled>
}
