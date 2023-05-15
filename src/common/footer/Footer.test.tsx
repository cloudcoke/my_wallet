import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer Test", () => {
  test("Render", () => {
    render(<Footer>Test</Footer>)

    const footer = screen.getByText("Test")
    expect(footer).toBeInTheDocument()
  })

  test("Buttons", () => {
    render(
      <Footer>
        <button></button>
        <button></button>
        <button></button>
      </Footer>
    )

    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(3)
  })
})
