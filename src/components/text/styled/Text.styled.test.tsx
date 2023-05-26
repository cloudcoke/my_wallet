import { render, screen } from "@testing-library/react"
import { TextStyled } from "./Text.styled"

describe("Text Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<TextStyled data-testid="text" />)

    const text = screen.getByTestId("text")
    return { rerender, text }
  }
  test("Render", () => {
    render(<TextStyled data-testid="text" />)

    const text = screen.getByTestId("text")
    expect(text).toBeInTheDocument()
  })

  test("Font Size", () => {
    const { rerender, text } = batch()

    expect(text).toHaveStyle({ fontSize: "12px" })

    rerender(<TextStyled fontSize="20px" />)
    expect(text).toHaveStyle({ fontSize: "20px" })
  })

  test("Color", () => {
    const { rerender, text } = batch()

    expect(text).toHaveStyle({ color: "rgba(0,0,0,0.4)" })

    rerender(<TextStyled color="red" />)
    expect(text).toHaveStyle({ color: "red" })
  })

  test("Margin Top", () => {
    const { rerender, text } = batch()

    expect(text).toHaveStyle({ marginTop: "23px" })

    rerender(<TextStyled marginTop="50px" />)
    expect(text).toHaveStyle({ marginTop: "50px" })
  })

  test("Margin Bottom", () => {
    const { rerender, text } = batch()

    expect(text).toHaveStyle({ marginBottom: "40px" })

    rerender(<TextStyled marginBottom="10px" />)
    expect(text).toHaveStyle({ marginBottom: "10px" })
  })
})
