import {Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <page-header>Loading page header...</page-header>
  <navigation>Loading page header...</navigation>
  
  <router-outlet></router-outlet>
  `
})


export class AppComponent  {
}


