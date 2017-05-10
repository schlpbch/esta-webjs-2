/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {SimpleNotificationsModule} from 'angular2-notifications';
import {TranslateService} from "@ngx-translate/core";

describe('AppComponent', () => {
    beforeEach(() => {

        class TranslationMock {
            public setDefaultLang() {
            }

            public use() {
            }
        }

        TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([], {useHash: true}),
                SimpleNotificationsModule.forRoot()
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                {provide: TranslateService, useClass: TranslationMock}
            ]
        });
        TestBed.compileComponents();
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
