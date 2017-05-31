/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Modul für die PrimeModule
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 31.05.2017, 2017.
 */
import {Injectable} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Injectable()
export class ButtonService {

    private splitButtonItems: MenuItem[];

    constructor() {
        this.splitButtonItems = this.createSplitButtonItems();
    }

    private createSplitButtonItems(): Array<MenuItem> {
        return [
            {label: 'Update', icon: 'fa-refresh'},
            {label: 'Delete', icon: 'fa-close'},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush'}
        ];
    }

    public getSplitButtonItems(): Array<MenuItem> {
        return this.splitButtonItems;
    }
}