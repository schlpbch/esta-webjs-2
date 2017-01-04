/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Definition der Home-Komponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
        <main>
            <div class="container">
                <div class="jumbotron">
                    <h1>{{ title }}</h1>
                    <p>{{ welcomeMessage }}</p>
                </div>
            </div>
        </main>
    `
})
export class HomeComponent {
    title: string;
    welcomeMessage: string;

    constructor() {
        this.title = 'ESTA WebJS - Starterkit mit Angular2';
        this.welcomeMessage = 'Herzlich Willkommen';
    }
}

