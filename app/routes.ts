import { Routes } from '@angular/router'
import { HeroListComponent } from './hero/hero-list.component'
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'
import { Friends } from './hero/friends/friends'
import { FriendsListComponent } from './hero/friends/friends-list.component'
import { FriendsRouteActivator } from './hero/friends/friends-route-activator.service'
import { Enemy } from './hero/enemy/enemy'
import { EnemyListComponent } from './hero/enemy/enemy-list.component'
import { EnemyRouteActivator } from './hero/enemy/enemy-route-activator.service'



export const appRoutes: Routes = [        
    { path: '', component: HeroListComponent },
    { path: ':id', component: HeroDetailComponent },        
    { path: ':id/friends', component: FriendsListComponent },
    { path: ':id/friends/:id', component: Friends },
    { path: ':id/enemy', component: EnemyListComponent},
    { path: ':id/enemy/:id', component: Enemy },
    { path: '**', component: ErrorComponent } 
]