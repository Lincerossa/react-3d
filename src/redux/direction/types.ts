export const DIRECTION_CHANGE_VALUE = "DIRECTION_CHANGE_VALUE"
export const DIRECTION_CHANGE_STATUS = "DIRECTION_CHANGE_STATUS"

export interface DirectionChangeValueAction {
  type: typeof DIRECTION_CHANGE_VALUE
  payload: boolean
}

interface DirectionChangeStatusAction {
  type: typeof DIRECTION_CHANGE_STATUS
  payload: string
}

export type DirectionActionTypes = DirectionChangeValueAction | DirectionChangeStatusAction

export interface DirectionInitialState {
  status: String
  value: boolean
}