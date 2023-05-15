import { render, screen } from "@testing-library/react"
import "jest-styled-components"
import { Button } from "./Button"

describe("Button Test", () => {
  test("Render", () => {
    render(<Button></Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  test("Text Content", () => {
    render(<Button>시작하기</Button>)

    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("시작하기")
  })
})
