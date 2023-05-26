import { render, screen } from "@testing-library/react"
import { HashStyled } from "./Hash.styled"

describe("Hash Styled Test", () => {
  test("Render", () => {
    render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toBeInTheDocument()
  })

  test("Width", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ width: "auto" })

    rerender(<HashStyled width="20px" />)
    expect(hash).toHaveStyle({ width: "20px" })
  })

  test("Height", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ height: "auto" })

    rerender(<HashStyled height="20px" />)
    expect(hash).toHaveStyle({ height: "20px" })
  })

  test("Font Size", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ fontSize: "10px" })

    rerender(<HashStyled fontSize="20px" />)
    expect(hash).toHaveStyle({ fontSize: "20px" })
  })

  test("color", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ color: "#000000" })

    rerender(<HashStyled color="red" />)
    expect(hash).toHaveStyle({ color: "red" })
  })

  test("Border Bottom", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ borderBottom: "none" })

    rerender(<HashStyled borderBottom="1px solid rgba(0,0,0,0.3)" />)
    expect(hash).toHaveStyle({ borderBottom: "1px solid rgba(0,0,0,0.3)" })
  })

  test("Margin", () => {
    const { rerender } = render(<HashStyled data-testid="hash" />)

    const hash = screen.getByTestId("hash")
    expect(hash).toHaveStyle({ margin: "0 auto" })

    rerender(<HashStyled margin="100px 100px" />)
    expect(hash).toHaveStyle({ margin: "100px 100px" })
  })
})
