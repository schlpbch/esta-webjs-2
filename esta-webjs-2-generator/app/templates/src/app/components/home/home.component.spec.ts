/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Unit-Tests Home
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {describe, it, expect} from '@angular/core/testing';
import {HomeComponent} from './home.component.ts';

describe('HomeComponent', () => {

    it('has a name property [title]', () => {
        let comp = new HomeComponent();
        expect(comp.title).toBe('ESTA WebJS - Starterkit mit Angular2');
    });

    it('has a name property [welcomeMessage]', () => {
        let comp = new HomeComponent();
        expect(comp.welcomeMessage).toBe('Herzlich Willkommen');
    });
});
