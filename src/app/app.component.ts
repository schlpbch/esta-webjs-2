import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public notificationOptions = {
        position: ['top', 'right'],
        timeOut: 5000,
        maxStack: 5,
        lastOnBottom: true
    };

    constructor(translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('de');
    }
}
