import { render, screen } from "@testing-library/react"
import { Hash } from "./Hash"

describe("Hash Test", () => {
  test("Render", () => {
    render(<Hash>Hash Test</Hash>)

    const hash = screen.getByText("Hash Test")
    expect(hash).toBeInTheDocument()
  })
})
