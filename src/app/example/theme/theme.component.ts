/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Page Object für die About Seite
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {Component, OnInit} from '@angular/core';
import {BreadCrumbService} from './theme-services/breadcrumb.service';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.css'],
    providers: [
        BreadCrumbService
    ]
})
export class ThemeComponent implements OnInit {

    public primengBaseDocumentationUrl = 'https://www.primefaces.org/primeng/#/';
    private breadCrumbItems: Array<MenuItem>;

    constructor(private breadCrumbService: BreadCrumbService) {
    }

    ngOnInit() {
        this.breadCrumbItems = this.breadCrumbService.getBreadCrumbItems();
    }

}
