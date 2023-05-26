import { render, screen } from "@testing-library/react"
import { HeaderStyled } from "./Header.styled"
import colorChip from "@common/color"
import logo from "@img/logo.png"

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

  test("Padding", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ padding: "10px" })

    rerender(<HeaderStyled padding="20px" />)
    expect(header).toHaveStyle({ padding: "20px" })
  })

  test("Display", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ display: "flex" })

    rerender(<HeaderStyled display="block" />)
    expect(header).toHaveStyle({ display: "block" })
  })

  test("Display Flex Content Location", () => {
    const { rerender } = render(<HeaderStyled data-testid="header" />)

    const header = screen.getByTestId("header")
    expect(header).toHaveStyle({ display: "flex", justifyContent: "flex-start", alignItems: "center" })

    rerender(<HeaderStyled display="none" />)
    expect(header).not.toHaveStyle({ display: "flex", justifyContent: "flex-start", alignItems: "center" })
  })

  test("Logo", () => {
    render(
      <HeaderStyled data-testid>
        <img src={logo} alt="logo" />
      </HeaderStyled>
    )

    const img = screen.getByRole("img")
    expect(img).toHaveStyle({ marginRight: "20px" })
  })
})
