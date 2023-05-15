import { render, screen } from "@testing-library/react"
import { Logo } from "./Logo"

describe("ProfileImg Test", () => {
  test("Render", () => {
    render(<Logo data-testid="" />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
  })
})
