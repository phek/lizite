import { Component } from '@angular/core'
import { User } from '../../models/user.model'
import { Observable } from 'rxjs'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userState: Observable<User>

  constructor(private userService: UserService) {
    this.userState = userService.getUserState()
  }

  login() {
    this.userService.login('Username')
  }

  logout() {
    this.userService.logout()
  }
}
