/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Navbar Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public notificationOptions = {
        position: ['top', 'right'],
        timeOut: 5000,
        maxStack: 5,
        lastOnBottom: true
    };

    constructor(translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('de');
    }
}
