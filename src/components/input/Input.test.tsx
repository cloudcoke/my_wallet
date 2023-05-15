import { render, screen } from "@testing-library/react"
import { Input } from "./Input"

describe("Input Test", () => {
  test("Render", () => {
    render(<Input />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("Placeholder", () => {
    render(<Input placeholder="hello" />)

    const input = screen.getByPlaceholderText("hello")
    expect(input).toBeInTheDocument()
  })
})
