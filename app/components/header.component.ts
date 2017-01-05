import { Component } from '@angular/core';

@Component({
    selector: 'page-header',
    template: `
    <div class="page-header">
        <h1>Example header<small> Subtext for header</small></h1>
    </div>
    
    <navigation>Loading page header...</navigation>
    `
})

export class HeaderComponent {}