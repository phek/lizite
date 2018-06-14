import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as UserActions from '../../store/actions/user.actions'
import { AppState } from '../../store/reducers'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<AppState>) {
  }

  login(username) {
    this.store.dispatch({
      type: UserActions.LOGIN,
      payload: username
    })
  }

  logout() {
    this.store.dispatch({
      type: UserActions.LOGOUT
    })
  }

  getUserState() {
    return this.store.select('user')
  }
}
