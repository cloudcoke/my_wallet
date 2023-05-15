import { render, screen } from "@testing-library/react"
import { BoxStyled } from "./Box.styled"

describe("Box Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<BoxStyled data-testid="box" />)
    const box = screen.getByTestId("box")

    return { rerender, box }
  }
  test("Render", () => {
    render(<BoxStyled data-testid="box" />)

    const box = screen.getByTestId("box")
    expect(box).toBeInTheDocument()
  })
  test("Width", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ width: "360px" })

    rerender(<BoxStyled width="100px" />)
    expect(box).toHaveStyle({ width: "100px" })
  })
  test("Height", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ height: "80px" })

    rerender(<BoxStyled height="100px" />)
    expect(box).toHaveStyle({ height: "100px" })
  })

  test("Border", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ border: "1px solid rgba(0,0,0,0.2)" })

    rerender(<BoxStyled border="2px solid #ffffff" />)
    expect(box).toHaveStyle({ border: "2px solid #ffffff" })
  })

  test("Border Radius", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ borderRadius: "10px" })

    rerender(<BoxStyled borderRadius="none" />)
    expect(box).toHaveStyle({ borderRadius: "none" })
  })

  test("Text Align", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ textAlign: "center" })

    rerender(<BoxStyled textAlign="left" />)
    expect(box).toHaveStyle({ textAlign: "left" })
  })

  test("Position", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ position: "relative" })

    rerender(<BoxStyled position="absolute" />)
    expect(box).toHaveStyle({ position: "absolute" })
  })

  test("Display", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ display: "flex" })

    rerender(<BoxStyled display="none" />)
    expect(box).toHaveStyle({ display: "none" })
  })

  test("Margin", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ margin: "0 auto" })

    rerender(<BoxStyled margin="0" />)
    expect(box).toHaveStyle({ margin: "0" })
  })

  test("Font Size", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ fontSize: "32px" })

    rerender(<BoxStyled fontSize="10px" />)
    expect(box).toHaveStyle({ fontSize: "10px" })
  })

  test("Display Flex Content Location", () => {
    const { rerender, box } = batch()

    expect(box).toHaveStyle({ display: "flex", justifyContent: "center", alignItems: "center" })

    rerender(<BoxStyled display="none" />)
    expect(box).not.toHaveStyle({ display: "flex", justifyContent: "center", alignItems: "center" })
  })

  test("SVG", () => {
    render(
      <BoxStyled>
        <svg data-testid="svg"></svg>
      </BoxStyled>
    )

    const svg = screen.getByTestId("svg")
    expect(svg).toHaveStyle({ position: "absolute", left: "20px", width: "30px", height: "30px" })
  })
})
