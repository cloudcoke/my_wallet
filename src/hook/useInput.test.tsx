import { renderHook, act } from "@testing-library/react"
import exp from "constants"
import { useInput } from "./useInput"

describe("Use Input Test", () => {
  test("InitValue String", () => {
    const { result } = renderHook(() => useInput("Hello"))
    expect(result.current.value).toBe("Hello")
  })

  test("InitValue Number", () => {
    const { result } = renderHook(() => useInput(10))
    expect(result.current.value).toBe(10)
  })

  test("onChange", () => {
    const { result } = renderHook(() => useInput(""))

    act(() => {
      result.current.onChange({ target: { value: "test" } } as React.ChangeEvent<HTMLInputElement>)
    })
    expect(result.current.value).toBe("test")
  })

  test("setClear", () => {
    const { result } = renderHook(() => useInput("hello"))

    act(() => {
      result.current.setClear()
    })
    expect(result.current.value).toBe("")
  })
})
