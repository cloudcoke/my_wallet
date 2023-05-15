import { LogoStyled } from "./styled"
import { ILogo } from "@interface/Styled.interface"

export const Logo: React.FC<ILogo> = ({ ...ILogo }) => {
  return <LogoStyled {...ILogo}></LogoStyled>
}
