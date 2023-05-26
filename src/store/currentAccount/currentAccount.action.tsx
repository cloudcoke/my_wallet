import { Dispatch } from "redux"
import {
  AccountActionData,
  ACCOUNT_REQUEST_START,
  ACCOUNT_REQUEST_SUCCESS,
  ACCOUNT_REQUEST_ERROR,
} from "./currentAccount.interface"

export const changeAccount = (account: string) => {
  return async (dispatch: Dispatch<AccountActionData>) => {
    dispatch({ type: ACCOUNT_REQUEST_START })
    try {
      dispatch({ type: ACCOUNT_REQUEST_SUCCESS, account })
    } catch (error: any) {
      dispatch({ type: ACCOUNT_REQUEST_ERROR, error: error.message })
    }
  }
}
