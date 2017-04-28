/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests ThemeComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {Component} from '@angular/core';

interface NavItem {
    displayName: string,
    routerLink: string
}

@Component({
    selector: 'navbar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    protected navItems: Array<NavItem> = [
        {displayName: 'Home', routerLink: ''},
        {displayName: 'About', routerLink: 'about'},
        {displayName: 'Theme', routerLink: 'theme'}
    ]

    constructor() {
    }
}
