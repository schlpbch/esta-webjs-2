/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('has a name property [title]', () => {
        expect(component.title).toBe('ESTA WebJS 2 - Starterkit mit AngularJS 2');
    });

    it('has a name property [welcomeMessage]', () => {
        expect(component.welcomeMessage).toBe('Herzlich Willkommen');
    });
});
