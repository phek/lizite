import { enableProdMode } from '@angular/core'
import { environment } from '../environments/environment'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { pages } from './pages'
import { components } from './components'
import { services } from './services'
import { reducers } from './store/reducers'
import { routes } from './app.routes'
import { materials } from './materials';
import { NavbarComponent } from './components/navbar/navbar.component'

let devModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 10,
  })
]

if (environment.production) {
  devModules = []
  enableProdMode()
}

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...components,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot(routes),
    ...materials,
    ...devModules
  ],
  providers: services,
  bootstrap: [AppComponent]
})

export class AppModule {
}
