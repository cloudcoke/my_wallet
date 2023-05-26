import { Button, Title, Hash, Wrapper } from "@components/index"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { ACCOUNT_REQUEST_SUCCESS } from "@store/currentAccount/index"
import { NavLink } from "react-router-dom"

export const Accounts: React.FC = () => {
  const [user, setUser] = useState<string[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/wallet")
        setUser(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const buttonHandler = async () => {
    const response = await axios.post("http://localhost:5000/wallet")
    setUser((prevUser) => [...prevUser, response.data.account])
  }

  const hashHandler = (e: React.MouseEvent<HTMLElement>) => {
    const account = (e.target as HTMLElement).textContent as string
    if (account === null) return
    dispatch({ type: ACCOUNT_REQUEST_SUCCESS, account })
  }

  return (
    <Wrapper flexDirection="column" justifyContent="flex-start">
      <Title>계정 선택</Title>

      {user.map((v, k) => {
        return (
          <NavLink key={k} to="/">
            <Hash
              width="360px"
              height="50px"
              borderBottom="1px solid rgba(0, 0, 0, 0.3)"
              data-index={k}
              onClick={hashHandler}
            >
              {v}
            </Hash>
          </NavLink>
        )
      })}

      <Button marginTop="40px" onClick={buttonHandler}>
        계정 만들기
      </Button>
    </Wrapper>
  )
}
