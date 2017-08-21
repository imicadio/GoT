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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroThumbnailComponent,
    HeroDetailComponent,
    ErrorComponent
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
  providers: [SharedHero, HeroRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
