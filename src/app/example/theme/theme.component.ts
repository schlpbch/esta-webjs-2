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
import {MenuItem, SelectItem} from 'primeng/primeng';
import {ButtonService} from './theme-services/button.service';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    providers: [
        BreadCrumbService,
        ButtonService
    ]
})
export class ThemeComponent implements OnInit {

    public primengBaseDocumentationUrl = 'https://www.primefaces.org/primeng/#/';
    private breadCrumbItems: Array<MenuItem>;
    private splitButtonItems: Array<MenuItem>;
    private selectButtonItems: Array<SelectItem>;

    constructor(private breadCrumbService: BreadCrumbService,
                private buttonService: ButtonService) {
    }

    ngOnInit() {
        this.breadCrumbItems = this.breadCrumbService.getBreadCrumbItems();
        this.splitButtonItems = this.buttonService.getSplitButtonItems();
        this.selectButtonItems = this.buttonService.getSelectButtonItems();
    }
}
