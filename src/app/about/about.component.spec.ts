/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PipeTransform, Pipe} from '@angular/core';

import {AboutComponent} from './about.component';
import {TranslateService} from "@ngx-translate/core";
import {XHRBackend, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {NotificationsService} from "angular2-notifications";

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return undefined;
    }
}

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    class NotificationServiceMock{}
    class TranslateServiceMock{}

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [AboutComponent, MockPipe],
            providers: [{provide: XHRBackend, useClass: MockBackend},
                {provide: NotificationsService, useClass: NotificationServiceMock},
                {provide: TranslateService, useValue: TranslateServiceMock}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed
            .createComponent(AboutComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
