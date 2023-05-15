import { render, screen } from "@testing-library/react"
import { HeaderStyled } from "./Header.styled"
import colorChip from "@common/color"

describe("Header Styled Test", () => {
  test("Render", () => {
    render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
  })

  test("Width", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ width: "100%" })

    rerender(<HeaderStyled width="100px" />)
    expect(header).toHaveStyle({ width: "100px" })
  })

  test("Height", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ height: "50px" })

    rerender(<HeaderStyled height="100px" />)
    expect(header).toHaveStyle({ height: "100px" })
  })

  test("Background Color", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ backgroundColor: `${colorChip["blue"].backgroundColor}` })

    rerender(<HeaderStyled backgroundColor={colorChip["gray"].backgroundColor} />)
    expect(header).toHaveStyle({ backgroundColor: `${colorChip["gray"].backgroundColor}` })
  })
})
