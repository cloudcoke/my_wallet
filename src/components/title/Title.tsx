import { TitleStyled } from "./styled"
import { ITitle } from "@interface/Styled.interface"

export const Title: React.FC<ITitle> = ({ children, ...ITitle }) => {
  return <TitleStyled {...ITitle}>{children}</TitleStyled>
}
