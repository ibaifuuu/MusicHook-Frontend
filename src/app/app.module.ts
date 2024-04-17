import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarHorizontalComponent } from './navbar-horizontal/navbar-horizontal.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [			
    AppComponent,
      HeaderComponent,
      NavbarHorizontalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
