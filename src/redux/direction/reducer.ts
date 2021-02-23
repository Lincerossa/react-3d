import {
  DirectionActionTypes,
  DirectionInitialState,
  DIRECTION_CHANGE_VALUE,
  DIRECTION_CHANGE_STATUS,
} from './types'

const initialState: DirectionInitialState = {
  status: 'lorem ipsum',
  value: false,
}

const directionReducer = (state = initialState, action: DirectionActionTypes) => {
  switch(action.type) {
    case DIRECTION_CHANGE_VALUE:
      return {
        ...state,
        value: action.payload
      }
    case DIRECTION_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      }

    default:
      return state
  }
}

export default directionReducer



type ReduxState = {
  direction: DirectionInitialState
}
export const getDirectionValue : (state: ReduxState) => boolean = (state) => state.direction.value
export const getDirectionStatus : (state: ReduxState) => String = (state) => state.direction.status