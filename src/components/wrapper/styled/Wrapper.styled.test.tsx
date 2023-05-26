import { render, screen } from "@testing-library/react"
import { WrapperStyled } from "./Wrapper.styled"

describe("Wrapper Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<WrapperStyled data-testid="wrap" />)

    const wrap = screen.getByTestId("wrap")
    return { rerender, wrap }
  }

  test("Render", () => {
    render(<WrapperStyled data-testid="wrap" />)

    const wrap = screen.getByTestId("wrap")

    expect(wrap).toBeInTheDocument()
  })

  test("Display", () => {
    const { rerender, wrap } = batch()

    expect(wrap).toHaveStyle({ display: "flex" })

    rerender(<WrapperStyled display="block" />)
    expect(wrap).toHaveStyle({ display: "block" })
  })

  test("Display Flex Content Location", () => {
    const { rerender, wrap } = batch()

    expect(wrap).toHaveStyle({
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    })

    rerender(<WrapperStyled display="block" />)
    expect(wrap).not.toHaveStyle({
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    })
  })

  test("Justify Content", () => {
    const { rerender, wrap } = batch()

    expect(wrap).toHaveStyle({ justifyContent: "space-around" })

    rerender(<WrapperStyled justifyContent="flex-start" />)
    expect(wrap).toHaveStyle({ justifyContent: "flex-start" })
  })

  test("AlignItems", () => {
    const { rerender, wrap } = batch()

    expect(wrap).toHaveStyle({ alignItems: "center" })

    rerender(<WrapperStyled alignItems="flex-start" />)
    expect(wrap).toHaveStyle({ alignItems: "flex-start" })
  })

  test("Flex Direction", () => {
    const { rerender, wrap } = batch()

    expect(wrap).toHaveStyle({ flexDirection: "row" })

    rerender(<WrapperStyled flexDirection="column" />)
    expect(wrap).toHaveStyle({ flexDirection: "column" })
  })
})
