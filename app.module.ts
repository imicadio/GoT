import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroListComponent } from './hero/hero-list.component'
import { HeroThumbnailComponent } from './hero/hero-thumbnail.component'
import { SharedHero } from './hero/shared/hero.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule
  ],
  providers: [SharedHero],
  bootstrap: [AppComponent]
})
export class AppModule { }
