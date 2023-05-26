import { render, screen } from "@testing-library/react"
import { Page } from "./Page"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { rootReducer } from "@store/index"
import userEvent from "@testing-library/user-event"
import logo from "@img/logo.png"

describe("Page Test", () => {
  const store = createStore(rootReducer)

  test("Render", async () => {
    const user = userEvent.setup()

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Page />
        </MemoryRouter>
      </Provider>
    )

    // render(<Page />, { wrapper: BrowserRouter })
    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", logo)

    const buttons = screen.getAllByRole("link")
    const [accounts, home, send] = buttons

    await user.click(accounts)
    const accountPage = screen.getByText("계정 선택")
    expect(accountPage).toBeInTheDocument()

    await user.click(send)
    const sendPage = screen.getByText("보낼 대상")
    expect(sendPage).toBeInTheDocument()
  })
})
