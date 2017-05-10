/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Navbar Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AboutComponent} from './about/about.component';

import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {ThemeComponent} from './theme/theme.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ThemeComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
