/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Unit-Tests ThemeComponent
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 27.04.2017, 2017.
 */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ThemeComponent} from './theme.component';

describe('ThemeComponent', () => {
    let component: ThemeComponent;
    let fixture: ComponentFixture<ThemeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThemeComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have a property with the bootstrap docu Url', () => {
        expect(component.bootstrapDocumentationUrl).toBe('https://v4-alpha.getbootstrap.com/components');
    });
});
