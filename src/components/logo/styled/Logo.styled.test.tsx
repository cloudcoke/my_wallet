import { render, screen } from "@testing-library/react"
import { LogoStyled } from "./Logo.styled"
import logo from "@img/logo.png"
import testImg from "@img/testImg.png"

describe("ProfileImg Styled Test", () => {
  const batch = () => {
    const { rerender } = render(<LogoStyled />)
    const img = screen.getByRole("img")

    return { rerender, img }
  }
  test("Render", () => {
    render(<LogoStyled />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
  })

  test("Img Render", () => {
    const { rerender, img } = batch()

    expect(img).toHaveStyle({ src: `${logo}` })

    rerender(<LogoStyled src={testImg} />)

    expect(img.getAttribute("src")).toContain(testImg)
    expect(img).toHaveAttribute("src", testImg)
  })

  test("Width", () => {
    const { rerender, img } = batch()

    expect(img).toHaveStyle({ width: "30px" })

    rerender(<LogoStyled width="100px" />)
    expect(img).toHaveStyle({ width: "100px" })
  })

  test("Height", () => {
    const { rerender, img } = batch()

    expect(img).toHaveStyle({ height: "30px" })

    rerender(<LogoStyled height="100px" />)
    expect(img).toHaveStyle({ height: "100px" })
  })

  test("Border Radius", () => {
    const { rerender, img } = batch()

    expect(img).toHaveStyle({ borderRadius: "100px" })

    rerender(<LogoStyled borderRadius="200px" />)
    expect(img).toHaveStyle({ borderRadius: "200px" })
  })
})
