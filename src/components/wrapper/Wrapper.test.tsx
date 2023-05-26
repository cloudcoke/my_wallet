import { render, screen } from "@testing-library/react"
import { Wrapper } from "./Wrapper"

describe("Wrapper", () => {
  test("Render", () => {
    render(<Wrapper>Wrap</Wrapper>)

    const wrap = screen.getByText("Wrap")
    expect(wrap).toBeInTheDocument()
  })
})
