import { render, screen } from "@testing-library/react"
import { Header } from "@common/index"

describe("Header Test", () => {
  test("Render", () => {
    render(<Header>Header Test</Header>)
    const header = screen.getByText("Header Test")
    expect(header).toBeInTheDocument()
  })
})
