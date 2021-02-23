import {
  DirectionActionTypes,
  DIRECTION_CHANGE_VALUE,
  DIRECTION_CHANGE_STATUS,
} from './types'

export const changeValueDirection: (payload: boolean) => DirectionActionTypes = (payload) => ({
  type: DIRECTION_CHANGE_VALUE,
  payload
})

export const changeStatusDirection: (payload: string) => DirectionActionTypes = (payload) => ({
  type: DIRECTION_CHANGE_STATUS,
  payload
})