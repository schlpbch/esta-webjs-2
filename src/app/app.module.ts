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
import {SimpleNotificationsModule} from 'angular2-notifications';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {ThemeComponent} from './theme/theme.component';
import {
    ButtonModule,
    BreadcrumbModule,
    MegaMenuModule,
    MenuModule,
    PanelMenuModule,
    SelectButtonModule,
    CalendarModule,
    AutoCompleteModule,
    SplitButtonModule,
    DropdownModule,
    RadioButtonModule,
    InputTextareaModule,
    InputTextModule,
    ListboxModule,
    PasswordModule,
    PanelModule,
    DataTableModule,
    SharedModule,
    TabMenuModule,
    MessagesModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

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
        FormsModule,
        CoreModule,
        NgbModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        ButtonModule,
        BreadcrumbModule,
        MegaMenuModule,
        MenuModule,
        PanelMenuModule,
        SelectButtonModule,
        CalendarModule,
        AutoCompleteModule,
        SplitButtonModule,
        DropdownModule,
        ListboxModule,
        RadioButtonModule,
        InputTextareaModule,
        InputTextModule,
        PasswordModule,
        PanelModule,
        DataTableModule,
        SharedModule,
        MessagesModule,
        TabMenuModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
