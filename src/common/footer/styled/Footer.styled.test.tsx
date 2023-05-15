import { render, screen } from "@testing-library/react"
import { FooterStyled } from "./Footer.styled"
import colorChip from "@common/color"

describe("Footer Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<FooterStyled data-testid="footer" />)
    const footer = screen.getByTestId("footer")

    return { rerender, footer }
  }
  test("Render", () => {
    render(<FooterStyled data-testid="footer" />)

    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })

  test("Width", () => {
    const { rerender, footer } = batch()

    expect(footer).toHaveStyle({ width: "100%" })

    rerender(<FooterStyled width="100px" />)
    expect(footer).toHaveStyle({ width: "100px" })
  })

  test("Height", () => {
    const { rerender, footer } = batch()

    expect(footer).toHaveStyle({ height: "100px" })

    rerender(<FooterStyled height="200px" />)
    expect(footer).toHaveStyle({ height: "200px" })
  })

  test("Background Color", () => {
    const { rerender, footer } = batch()

    expect(footer).toHaveStyle({ backgroundColor: `${colorChip["blue"].backgroundColor}` })

    rerender(<FooterStyled backgroundColor={colorChip["gray"].backgroundColor} />)
    expect(footer).toHaveStyle({ backgroundColor: `${colorChip["gray"].backgroundColor}` })
  })

  test("Display", () => {
    const { rerender, footer } = batch()

    expect(footer).toHaveStyle({ display: "flex" })

    rerender(<FooterStyled display="block" />)
    expect(footer).toHaveStyle({ display: "block" })
  })

  test("Display Flex Content Location", () => {
    const { rerender, footer } = batch()

    expect(footer).toHaveStyle({ display: "flex", justifyContent: "center", alignItems: "center" })

    rerender(<FooterStyled display="none" />)
    expect(footer).not.toHaveStyle({ display: "flex", justifyContent: "center", alignItems: "center" })
  })

  test("Justify Content", () => {
    render(<FooterStyled data-testid="footer" justifyContent="space-between" />)

    const footer = screen.getByTestId("footer")
    expect(footer).toHaveStyle({ display: "flex", justifyContent: "space-between" })
  })

  test("Align Items", () => {
    render(<FooterStyled data-testid="footer" alignItems="flex-start" />)

    const footer = screen.getByTestId("footer")
    expect(footer).toHaveStyle({ display: "flex", alignItems: "flex-start" })
  })

  test("Buttons", () => {
    const { rerender } = render(
      <FooterStyled>
        <button></button>
      </FooterStyled>
    )

    const button = screen.getByRole("button")
    expect(button).toHaveStyle({ width: "50px", height: "50px" })

    rerender(
      <FooterStyled width="200px" height="100px">
        <button></button>
      </FooterStyled>
    )

    expect(button).toHaveStyle({ width: "200px", height: "100px" })
  })
})
