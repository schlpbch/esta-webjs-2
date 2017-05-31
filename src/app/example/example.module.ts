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
import {HttpModule} from '@angular/http';
import {TranslateModule} from '@ngx-translate/core';
import {AboutComponent} from './about/about.component';
import {ThemeComponent} from './theme/theme.component';

@NgModule({
    declarations: [
        AboutComponent,
        ThemeComponent
    ],
    imports: [
        HttpModule,
        TranslateModule
    ]
})
export class ExampleModule {
}
