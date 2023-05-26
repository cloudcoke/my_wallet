import { TextStyled } from "./styled"
import { IText } from "interface"

export const Text: React.FC<IText> = ({ children, ...IText }) => {
  return <TextStyled {...IText}>{children}</TextStyled>
}
