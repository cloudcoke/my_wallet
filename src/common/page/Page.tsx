import { Header, Footer } from "@common/index"
import { AppRouter } from "@routes/AppRoute"

export const Page = () => {
  return (
    <>
      <Header></Header>
      <AppRouter />
      <Footer></Footer>
    </>
  )
}
