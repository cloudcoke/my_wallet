import { Routes, Route } from "react-router-dom"
import { Main, Accounts, Send } from "@pages/index"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </>
  )
}
