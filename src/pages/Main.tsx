import { Box, Title } from "@components/index"
import { coins } from "@interface/coins"

export const Main = () => {
  return (
    <>
      <Title>보유 코인</Title>
      <Box>{coins["ing"].logo}0 ING</Box>
      <Box>{coins["bitcoin"].logo}0 BTC</Box>
      <Box>{coins["etherium"].logo}0 ETH</Box>
    </>
  )
}
