import { WrapperStyled } from "./styled"
import { IWrap } from "interface"

export const Wrapper: React.FC<IWrap> = ({ children, ...IWrap }) => {
  return <WrapperStyled {...IWrap}>{children}</WrapperStyled>
}
