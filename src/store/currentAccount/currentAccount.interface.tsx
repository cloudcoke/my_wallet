export const ACCOUNT_REQUEST_START = "ACCOUNT_REQUEST_START"
export const ACCOUNT_REQUEST_SUCCESS = "ACCOUNT_REQUEST_SUCCESS"
export const ACCOUNT_REQUEST_ERROR = "ACCOUNT_REQUEST_ERROR"

export interface AccountReqStart {
  type: typeof ACCOUNT_REQUEST_START
}
export interface AccountReqSuccess {
  type: typeof ACCOUNT_REQUEST_SUCCESS
  account: string
}
export interface AccountReqError {
  type: typeof ACCOUNT_REQUEST_ERROR
  error: string
}

export type AccountActionData = AccountReqStart | AccountReqSuccess | AccountReqError
