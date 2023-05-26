import { render, screen } from "@testing-library/react"
import "jest-styled-components"
import { ButtonStyled } from "./Button.styled"
import colorChip from "@common/color"

describe("Button Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<ButtonStyled />)
    const button = screen.getByRole("button")

    return { rerender, button }
  }

  test("Render", () => {
    render(<ButtonStyled />)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  test("Width", async () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ width: "200px" })

    rerender(<ButtonStyled width="100px" />)
    expect(button).toHaveStyle({ width: "100px" })
  })

  test("Height", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ height: "50px" })

    rerender(<ButtonStyled height="50px" />)
    expect(button).toHaveStyle({ height: "50px" })
  })

  test("BorderRadius", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ borderRadius: "10px" })

    rerender(<ButtonStyled borderRadius="50px" />)
    expect(button).toHaveStyle({ borderRadius: "50px" })
  })

  test("Background", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ backgroundColor: `${colorChip["blue"].backgroundColor}` })

    rerender(<ButtonStyled backgroundColor="red" />)
    expect(button).toHaveStyle({ backgroundColor: `${colorChip["red"].backgroundColor}` })
  })

  test("Color", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ color: "#ffffff" })

    rerender(<ButtonStyled color="red" />)
    expect(button).toHaveStyle({ color: "red" })
  })

  test("Font Size", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyle({ fontSize: "20px" })

    rerender(<ButtonStyled fontSize="10px" />)
    expect(button).toHaveStyle({ fontSize: "10px" })
  })

  test("Hover", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyleRule("background", `${colorChip["blue"].hover}`, {
      modifier: ":hover",
    })

    rerender(<ButtonStyled backgroundColor="red" />)
    expect(button).toHaveStyleRule("background", `${colorChip["red"].hover}`, {
      modifier: ":hover",
    })
  })

  test("SVG", () => {
    const { rerender } = render(
      <ButtonStyled>
        <a href="/">
          <svg data-testid="svg"></svg>
        </a>
      </ButtonStyled>
    )

    const svg = screen.getByTestId("svg")
    expect(svg).toHaveStyle({ width: "100%", height: "100%" })

    rerender(
      <ButtonStyled width="30px" height="30px">
        <a href="/">
          <svg data-testid="svg"></svg>
        </a>
      </ButtonStyled>
    )
    expect(svg).toHaveStyle({ width: "30px", height: "30px" })
  })
})
