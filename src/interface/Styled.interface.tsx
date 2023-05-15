import { ReactNode } from "react"

export class IDefaultStyle {
  children?: string | ReactNode
  width?: string
  height?: string
}

export class IButton extends IDefaultStyle {
  borderRadius?: string
  backgroundColor?: string
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
}

export class ILogo extends IDefaultStyle {
  src?: string
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
}
