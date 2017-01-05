import { Component } from '@angular/core';

@Component ({
    selector: 'navigation',
    template:  `
    <nav class="navbar navbar-static-top navbar-inverse">
        <a class="navbar-brand" href="#">Project name</a>
        <ul class="nav navbar-nav">
            <li role="presentation" [routerLinkActive]="['active']" *ngFor="let item of items">
                <a routerLink="{{item.linkValue}}" routerLinkActive="active-link">{{item.linkText}}</a>
            </li>
        </ul>
    </nav>
    `
})

export class NavigationComponent {
    items = [
        {linkText: 'Home', linkValue: '/home'},
        {linkText: 'Profile', linkValue: '/profile'},
        {linkText: 'About', linkValue: '/about'}
    ];
}