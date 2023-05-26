import { render, screen } from "@testing-library/react"
import { Logo } from "./Logo"
import logo from "@img/logo.png"

describe("ProfileImg Test", () => {
  test("Render", () => {
    render(<Logo src={logo} />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
  })
})
