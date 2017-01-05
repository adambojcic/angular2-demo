import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';

import { HeaderComponent }   from './components/header.component';
import { NavigationComponent }   from './components/navigation.component';



import { ComplexFormComponent } from './components/complexform.component';
import { ItemsGridComponent } from './components/itemsgrid.component';

const appRoutes: Routes = [
  { path: 'home', component: ItemsGridComponent },
  { path: 'profile', component: ComplexFormComponent },
  { path: '**', component: ItemsGridComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HeaderComponent, ComplexFormComponent, ItemsGridComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
