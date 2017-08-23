import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'

import { NavbarComponent } from './navbar/navbar.component';
import { HeroListComponent } from './hero/hero-list.component'
import { HeroThumbnailComponent } from './hero/hero-thumbnail.component'
import { SharedHero } from './hero/shared/hero.service';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component'
import { appRoutes } from './routes';
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service'
import { EnemyListComponent } from './hero/enemy/enemy-list.component'
import { FriendsListComponent } from './hero/friends/friends-list.component'
import { Friends } from './hero/friends/friends'
import { FriendsRouteActivator } from './hero/friends/friends-route-activator.service'
import { Enemy } from './hero/enemy/enemy'
import { EnemyRouteActivator } from './hero/enemy/enemy-route-activator.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroThumbnailComponent,
    HeroDetailComponent,
    ErrorComponent,
    EnemyListComponent,
    FriendsListComponent,
    Friends,
    Enemy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedHero, HeroRouteActivator, FriendsRouteActivator, EnemyRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
