import { render, screen } from "@testing-library/react"
import { Box } from "./Box"
describe("Box Test", () => {
  test("Render With Text Content", () => {
    render(<Box>0 ING</Box>)

    const box = screen.getByText("0 ING")
    expect(box).toBeInTheDocument()
  })

  test("Component Render", () => {
    const TestComponent = () => {
      return <button>ChildComponent</button>
    }

    render(
      <Box>
        <TestComponent />
      </Box>
    )

    expect(screen.getByText("ChildComponent")).toBeInTheDocument()
  })
})
