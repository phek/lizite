import { HomeComponent } from './pages/home/home.component'

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]
