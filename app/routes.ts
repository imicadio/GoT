import { Routes } from '@angular/router'
import { HeroListComponent } from './hero/hero-list.component'
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'
import { CreateHeroComponent } from './create-hero/create-hero.component'




export const appRoutes: Routes = [        
    { path: 'bohater', component: HeroListComponent },
    { path: 'nowy', component: CreateHeroComponent }, 
    { path: 'bohater/:id', component: HeroDetailComponent },
    //{ path: 'bohater/nowy', component: CreateHeroComponent },
    //{ path: '**', component: ErrorComponent }, 
    { path: '', redirectTo: '/bohater', pathMatch: 'full' }
]