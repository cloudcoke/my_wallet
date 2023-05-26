import { Header, Footer } from "@common/index"
import { Logo, Hash, Button } from "@components/index"
import { AppRouter } from "@routes/AppRoute"
import logo from "@img/logo.png"
import { Icon } from "@iconify/react"
import { NavLink, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "store"

export const Page = () => {
  const { account }: { account: string } = useSelector((state: RootState) => state.accountState)
  const location = useLocation()
  return (
    <>
      <Header>
        <Logo src={logo} />
        {location.pathname !== "/accounts" && (
          <Hash color="#ffffff" margin="0">
            {account}
          </Hash>
        )}
      </Header>
      <AppRouter />
      <Footer>
        <Button>
          <NavLink to="/accounts">
            <Icon icon="mdi:account" color="white" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/">
            <Icon icon="tabler:coin-bitcoin" color="white" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/send">
            <Icon icon="grommet-icons:transaction" color="white" />
          </NavLink>
        </Button>
      </Footer>
    </>
  )
}
