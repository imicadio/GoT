import { Routes } from '@angular/router'
import { HeroListComponent } from './hero/hero-list.component'
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'
import { Friends } from './hero/friends/friends'
import { FriendsRouteActivator } from './hero/friends/friends-route-activator.service'
import { Enemy } from './hero/enemy/enemy'
import { EnemyRouteActivator } from './hero/enemy/enemy-route-activator.service'



export const appRoutes: Routes = [        
    { path: 'hero', component: HeroListComponent },
    { path: 'hero/:id', component: HeroDetailComponent, canActivate: [HeroRouteActivator] },
    { path: 'hero/:id/:id', component: Friends, canActivate: [FriendsRouteActivator] },    
    { path: 'hero/:id/:id', component: Enemy, canActivate: [EnemyRouteActivator] },    
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: 'hero', pathMatch: 'full' }    
]