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
import {MenuItem, SelectItem} from 'primeng/primeng';

@Injectable()
export class ButtonService {

    private splitButtonItems: MenuItem[];
    private selectButtonItems: SelectItem[];

    constructor() {
        this.splitButtonItems = this.createSplitButtonItems();
        this.selectButtonItems = this.createSelectButtonItems();
    }

    private createSelectButtonItems(): Array<SelectItem> {
        let cities = [];
        cities.push({label: 'New York', value: 'New York'});
        cities.push({label: 'Rome', value: 'Rome'});
        cities.push({label: 'London', value: 'London'});
        cities.push({label: 'Istanbul', value: 'Istanbul'});
        cities.push({label: 'Paris', value: 'Paris'});
        return cities;
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

    public getSelectButtonItems(): Array<SelectItem> {
        return this.selectButtonItems;
    }
}