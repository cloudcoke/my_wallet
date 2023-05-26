import { Title, Text, Input, Button } from "@components/index"
import { useSelector } from "react-redux"
import { RootState } from "store"
import axios from "axios"
import { useEffect, useState } from "react"
import { useInput } from "@hook/index"

export const Send = () => {
  const { account }: { account: string } = useSelector((state: RootState) => state.accountState)
  const [ing, setIng] = useState(0)
  const { value: received, onChange: receivedChange, setClear: receivedClear } = useInput("")
  const { value: amount, onChange: amountChange, setClear: amountClear } = useInput("")

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

  const sendHandler = async () => {
    const request = {
      sender: account,
      received,
      amount,
    }

    await axios.post("http://localhost:5000/transaction", { ...request })
    receivedClear()
    amountClear()
  }

  return (
    <>
      <Title>보낼 대상</Title>
      <Text>잔액 : {ing} ING</Text>
      <Input placeholder="주소 입력" value={received} onChange={receivedChange} />
      <Input placeholder="수량" value={amount} onChange={amountChange} />
      <Button onClick={sendHandler}>전송</Button>
    </>
  )
}
