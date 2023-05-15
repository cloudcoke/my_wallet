import { InputStyled } from "./styled"
import { IInput } from "@interface/Styled.interface"

export const Input: React.FC<IInput> = ({ ...IInput }) => {
  return <InputStyled {...IInput} />
}
