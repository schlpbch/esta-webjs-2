/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Modul für die Features
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 24.05.2017, 2017.
 */
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {AboutComponent} from './about/about.component';
import {routing} from './example.routes';
import {HomeComponent} from './home/home.component';
import {ThemeComponent} from './theme/theme.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ThemeComponent
    ],
    imports: [
        TranslateModule,
        routing
    ]
})
export class ExampleModule {
}
