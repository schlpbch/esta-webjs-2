/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests ThemeComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {NotificationsComponent} from './notifications/notifications.component';
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
    imports: [CommonModule, RouterModule, SimpleNotificationsModule.forRoot()],
    declarations: [NavComponent, NotificationsComponent],
    exports: [NavComponent, NotificationsComponent]
})
export class CoreModule {
}