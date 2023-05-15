import { ButtonStyled } from "./styled"
import { IButton } from "interface"

export const Button: React.FC<IButton> = ({ children, ...IButton }) => {
  return <ButtonStyled {...IButton}>{children}</ButtonStyled>
}
