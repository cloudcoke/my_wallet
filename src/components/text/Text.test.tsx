import { render, screen } from "@testing-library/react"
import { Text } from "./Text"

describe("Text Test", () => {
  test("Render", () => {
    render(<Text>Hello</Text>)

    const text = screen.getByText("Hello")

    expect(text).toBeInTheDocument()
  })
})
