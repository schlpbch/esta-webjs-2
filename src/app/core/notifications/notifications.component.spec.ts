/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests AboutComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 26.04.2017, 2017.
 */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotificationsComponent} from './notifications.component';

describe('NotificationsComponent', () => {

    let component: NotificationsComponent;
    let fixture: ComponentFixture<NotificationsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationsComponent],
            imports: [SimpleNotificationsModule.forRoot()]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should declare an options field to configure the Notifications`, () => {
        let expectedNotificationOptions = {
            position: ['top', 'right'],
            timeOut: 5000,
            maxStack: 5,
            lastOnBottom: true
        };
        expect(expectedNotificationOptions).toEqual(component.notificationOptions);
    })
})