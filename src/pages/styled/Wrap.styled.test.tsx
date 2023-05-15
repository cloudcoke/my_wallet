import { render, screen } from "@testing-library/react"
import { WrapStyled } from "./Wrap.styled"

test("Wrap Render Test", () => {
  render(<WrapStyled data-testid="wrap"></WrapStyled>)
  const wrap = screen.getByTestId("wrap")
  expect(wrap).toBeInTheDocument()
})
