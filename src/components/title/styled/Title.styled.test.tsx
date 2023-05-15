import { render, screen } from "@testing-library/react"
import { TitleStyled } from "./Title.styled"

describe("Title Styled Test", () => {
  test("Render", () => {
    render(<TitleStyled />)

    const title = screen.getByRole("heading")
    expect(title).toBeInTheDocument()
  })

  test("Text Align", () => {
    const { rerender } = render(<TitleStyled />)

    const title = screen.getByRole("heading")
    expect(title).toHaveStyle({ textAlign: "center" })

    rerender(<TitleStyled textAlign="left" />)
    expect(title).toHaveStyle({ textAlign: "left" })
  })

  test("Font Size", () => {
    const { rerender } = render(<TitleStyled />)

    const title = screen.getByRole("heading")
    expect(title).toHaveStyle({ fontSize: "30px" })

    rerender(<TitleStyled fontSize="100px" />)
    expect(title).toHaveStyle({ fontSize: "100px" })
  })

  test("Padding", () => {
    const { rerender } = render(<TitleStyled />)

    const title = screen.getByRole("heading")
    expect(title).toHaveStyle({ padding: "40px" })

    rerender(<TitleStyled padding="100px" />)
    expect(title).toHaveStyle({ padding: "100px" })
  })
})
