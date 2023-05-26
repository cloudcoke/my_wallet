import {
  AccountActionData,
  ACCOUNT_REQUEST_ERROR,
  ACCOUNT_REQUEST_START,
  ACCOUNT_REQUEST_SUCCESS,
} from "./currentAccount.interface"

export interface AccountStateType {
  isLoading: boolean
  account?: string
  error: null
}
export const initState: AccountStateType = {
  isLoading: false,
  account: "",
  error: null,
}

export const accountState = (state = initState, action: AccountActionData) => {
  switch (action.type) {
    case ACCOUNT_REQUEST_START:
      return { ...state, isLoading: true, error: null }
    case ACCOUNT_REQUEST_SUCCESS:
      return { ...state, isLoading: false, account: action.account }
    case ACCOUNT_REQUEST_ERROR:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}
