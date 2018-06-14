import * as UserActions from '../actions/user.actions'

export interface UserState {
  loggedIn: boolean,
  username?: string
}

const initialState: UserState = {
  loggedIn: false
}

export function userReducer(state: UserState = initialState, action) {
  switch (action.type) {
    case UserActions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        username: null
      }
    case UserActions.LOGIN:
      return {
        ...state,
        loggedIn: true,
        username: action.payload
      }
    default:
      return state
  }
}
