import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
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
export class HomeComponent implements OnInit {
    title: string;
    welcomeMessage: string;

    constructor() {
        this.title = 'ESTA WebJS 2 - Starterkit mit AngularJS 2';
        this.welcomeMessage = 'Herzlich Willkommen';
    }

    ngOnInit() {
    }
}
