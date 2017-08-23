import { Routes } from '@angular/router'
import { HeroListComponent } from './hero/hero-list.component'
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'




export const appRoutes: Routes = [        
    { path: 'hero', component: HeroListComponent }, 
    { path: 'hero/:id', component: HeroDetailComponent },      
    //{ path: '**', component: ErrorComponent }, 
    { path: '', redirectTo: '/hero', pathMatch: 'full' }
]