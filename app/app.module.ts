import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeroRouteActivator } from './hero/hero-detail/hero-route-activator.service';
import { CreateHeroComponent } from './create-hero/create-hero.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroThumbnailComponent,
    HeroDetailComponent,
    ErrorComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedHero, HeroRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
