/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: NotificationsComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent {

    public notificationOptions = {
        position: ['top', 'right'],
        timeOut: 5000,
        maxStack: 5,
        lastOnBottom: true
    };
}
