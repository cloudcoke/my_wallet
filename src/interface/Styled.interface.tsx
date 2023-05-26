import { ReactNode } from "react"

export class IDefaultStyle {
  children?: string | ReactNode
  width?: string
  height?: string
}

export class IButton extends IDefaultStyle {
  borderRadius?: string
  backgroundColor?: string
  color?: string
  fontSize?: string
  marginTop?: string
  onClick?: () => void
}

export class IBox extends IDefaultStyle {
  borderRadius?: string
  border?: string
  textAlign?: string
  position?: string
  display?: string
  margin?: string
  fontSize?: string
  justifyContent?: string
  alignItems?: string
}

export class IInput extends IDefaultStyle {
  borderRadius?: string
  border?: string
  placeholder?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export class ILogo extends IDefaultStyle {
  src!: string
  borderRadius?: string
}

export class IFooter extends IDefaultStyle {
  backgroundColor?: string
  display?: string
  justifyContent?: string
  alignItems?: string
}

export class ITitle extends IDefaultStyle {
  textAlign?: string
  fontSize?: string
  padding?: string
}

export class IHeader extends IDefaultStyle {
  backgroundColor?: string
  padding?: string
  display?: string
  justifyContent?: string
  alignItems?: string
}

export class IHash extends IDefaultStyle {
  fontSize?: string
  color?: string
  borderBottom?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  margin?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export class IText extends IDefaultStyle {
  fontSize?: string
  color?: string
  marginTop?: string
  marginBottom?: string
}

export class IWrap extends IDefaultStyle {
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}
