import {Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div>
    <page-header>Loading page header...</page-header>
    <navigation>Loading page header...</navigation>
  </div>
  
  <div>
    <router-outlet></router-outlet>
  <div>
  
  <div>
    <page-footer></page-footer>
  <div>
  `
})


export class AppComponent  {
}


