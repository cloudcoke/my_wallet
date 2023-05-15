import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Page } from "./Page"
import { BrowserRouter, MemoryRouter } from "react-router-dom"

describe("Page Test", () => {
  test("Render", () => {
    render(<Page />, { wrapper: BrowserRouter })
    const user = userEvent.setup()

    expect(screen.getByText("보유 코인")).toBeInTheDocument()
  })
})
