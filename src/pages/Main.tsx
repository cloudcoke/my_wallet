import { Box, Title } from "@components/index"
import { coins } from "@interface/coins"
import { useSelector } from "react-redux"
import { RootState } from "store"
import axios from "axios"
import { useEffect, useState } from "react"

export const Main = () => {
  const { account }: { account: string } = useSelector((state: RootState) => state.accountState)
  const [ing, setIng] = useState(0)

  useEffect(() => {
    getIngAmount()
  }, [account])

  const getIngAmount = async () => {
    if (!account) return
    const {
      data: { balance },
    } = await axios.get(`http://localhost:5000/wallet/${account}`)

    setIng(balance)
  }

  return (
    <>
      <Title>보유 코인</Title>
      <Box>
        {coins["ing"].logo}
        {ing} ING
      </Box>
      <Box>{coins["bitcoin"].logo}0 BTC</Box>
      <Box>{coins["etherium"].logo}0 ETH</Box>
    </>
  )
}
