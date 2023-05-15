import { render, screen } from "@testing-library/react"
import { Main } from "@pages/index"

describe("Main Page Test", () => {
  test("Render", () => {
    render(<Main />)

    const main = screen.getAllByRole("generic")
    main.shift()
    expect(main).toHaveLength(3)
    expect(main[0]).toBeInTheDocument()
    expect(main[1]).toBeInTheDocument()
    expect(main[2]).toBeInTheDocument()
  })
})
