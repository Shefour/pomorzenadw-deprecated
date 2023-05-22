import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWelcomeComponent } from './new-welcome/new-welcome.component';
import { PlacesComponent } from './places/places.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AttractionComponent } from "./attraction/attraction.component";
import { MyData } from './mydata';
import { ErrorComponent } from "./error/error.component";



@NgModule({
  declarations: [
    AppComponent,
    NewWelcomeComponent,
    PlacesComponent,
    NavMenuComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AttractionComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MyData],
  bootstrap: [AppComponent]
})
export class AppModule { }
