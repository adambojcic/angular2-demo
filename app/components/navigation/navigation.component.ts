import { Component } from '@angular/core';

@Component ({
    selector: 'navigation',
    template:  `
    <ul class="nav nav-pills">
        <li role="presentation" [routerLinkActive]="['active']"><a routerLink="/home" routerLinkActive="active-link">Home</a></li>
        <li role="presentation" [routerLinkActive]="['active']"><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
        <li role="presentation" [routerLinkActive]="['active']"><a routerLink="/about" routerLinkActive="active">About</a></li>
    </ul>
    `
})

export class NavigationComponent {
    
}