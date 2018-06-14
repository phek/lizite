import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-nav-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent {

  _color: string = null
  _text = 'button'
  hover = false

  @Input()
  set color(color: string) {
    this._color = color
  }

  @Input()
  set text(text: string) {
    this._text = text
  }

}
