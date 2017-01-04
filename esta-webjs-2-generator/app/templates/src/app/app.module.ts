import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {MessagesService} from './components/common/messages/messages.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';
import {MessagesComponent} from './components/common/messages/messages.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ThemeComponent} from './components/theme/theme.component';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        AboutComponent,
        HomeComponent,
        ThemeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing],
    providers: [
        MessagesService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
