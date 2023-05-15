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

    expect(button).toHaveStyle({ backgroundColor: `${colorChip["red"].backgroundColor}` })

    rerender(<ButtonStyled backgroundColor="blue" />)
    expect(button).toHaveStyle({ backgroundColor: `${colorChip["blue"].backgroundColor}` })
  })

  test("Hover", () => {
    const { rerender, button } = batch()

    expect(button).toHaveStyleRule("background", `${colorChip["red"].hover}`, {
      modifier: ":hover",
    })

    rerender(<ButtonStyled backgroundColor="blue" />)
    expect(button).toHaveStyleRule("background", `${colorChip["blue"].hover}`, {
      modifier: ":hover",
    })
  })

  test("SVG", () => {
    const { rerender } = render(
      <ButtonStyled>
        <svg data-testid="svg"></svg>
      </ButtonStyled>
    )

    const svg = screen.getByTestId("svg")
    expect(svg).toHaveStyle({ width: "100%", height: "100%" })

    rerender(
      <ButtonStyled width="30px" height="30px">
        <svg data-testid="svg"></svg>
      </ButtonStyled>
    )
    expect(svg).toHaveStyle({ width: "30px", height: "30px" })
  })
})
