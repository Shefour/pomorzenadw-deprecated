import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWelcomeComponent } from './new-welcome/new-welcome.component';
import { PlacesComponent } from './places/places.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AttractionComponent } from './attraction/attraction.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: NewWelcomeComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'attraction/:id', component: AttractionComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
