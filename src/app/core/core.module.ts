/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Core Module
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {throwIfAlreadyLoaded} from './module-import-guard';

import {NavComponent} from './nav/nav.component';
import {NotificationsComponent} from './notifications/notifications.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        SimpleNotificationsModule.forRoot()
    ],
    declarations: [
        NavComponent,
        NotificationsComponent
    ],
    exports: [
        NavComponent,
        NotificationsComponent
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'core module');
    }
}