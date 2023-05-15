import { render, screen } from "@testing-library/react"
import { InputStyled } from "./Input.styled"

describe("Input Styled Test", () => {
  test("Render", () => {
    render(<InputStyled />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("Width", () => {
    const { rerender } = render(<InputStyled />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveStyle({ width: "360px" })

    rerender(<InputStyled width="100px" />)
    expect(input).toHaveStyle({ width: "100px" })
  })

  test("Height", () => {
    const { rerender } = render(<InputStyled />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveStyle({ height: "50px" })

    rerender(<InputStyled height="100px" />)
    expect(input).toHaveStyle({ height: "100px" })
  })

  test("Border", () => {
    const { rerender } = render(<InputStyled />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveStyle({ border: "1px solid rgba(0,0,0,0.2)" })

    rerender(<InputStyled border="2px solid #ffffff" />)
    expect(input).toHaveStyle({ border: "2px solid #ffffff" })
  })

  test("Border Radius", () => {
    const { rerender } = render(<InputStyled />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveStyle({ borderRadius: "10px" })

    rerender(<InputStyled borderRadius="20px" />)
    expect(input).toHaveStyle({ borderRadius: "20px" })
  })
})
