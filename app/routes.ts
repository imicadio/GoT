import { Routes } from '@angular/router'
import { HeroListComponent } from './hero/hero-list.component'
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'


export const appRoutes: Routes = [
    { path: '', component: HeroListComponent },
    { path: ':id', component: HeroDetailComponent, canActivate: [HeroRouteActivator] },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
    
]