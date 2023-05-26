import React, { useState } from "react"

export const useInput = (initValue: string | number) => {
  const [value, setValue] = useState(initValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const setClear = () => {
    setValue("")
  }

  return {
    value,
    onChange,
    setClear,
  }
}
