import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `
        body {
            padding-top: 5rem;
        }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
