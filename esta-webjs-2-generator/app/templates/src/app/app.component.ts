/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Hauptkomponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <a class="navbar-brand pull-right" href="#" title="Go to homepage"></a>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#navbar-collapse-1" aria-expanded="false"
                        ng-click="$ctrl.navCollapsed = !$ctrl.navCollapsed">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div uib-collapse="$ctrl.navCollapsed" class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav navbar-left">
                    <li><a [routerLink]="['']">Home</a></li>
                    <li><a [routerLink]="['about']">About</a></li>
                    <li><a [routerLink]="['theme']">Theme</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        </nav>
        <div class="topfix"></div>
        <messages-component></messages-component>
        <router-outlet></router-outlet>
      `,
    styles: [
            require('bootstrap/dist/css/bootstrap.min.css').toString(),
        `
        .topfix {
           height: 60px;
        }`]
})
export class AppComponent {
}
