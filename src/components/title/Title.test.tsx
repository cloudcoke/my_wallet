import { render, screen } from "@testing-library/react"
import { Title } from "./Title"

describe("Title Test", () => {
  test("Render", () => {
    render(<Title />)

    const title = screen.getByRole("heading")
    expect(title).toBeInTheDocument()
  })

  test("Children", () => {
    render(<Title>계정 선택</Title>)

    const title = screen.getByText("계정 선택")
    expect(title).toBeInTheDocument()
  })
})
