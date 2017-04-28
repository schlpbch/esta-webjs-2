/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Core Module
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {NotificationsComponent} from './notifications/notifications.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {throwIfAlreadyLoaded} from './module-import-guard';

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

    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        throwIfAlreadyLoaded(parentModule, 'core module');
    }
}