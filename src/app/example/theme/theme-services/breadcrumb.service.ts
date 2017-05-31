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
export class BreadCrumbService {

    private breadCrumbItems: MenuItem[];

    constructor(){
        this.breadCrumbItems = [];
        this.breadCrumbItems.push({label:'Categories'});
        this.breadCrumbItems.push({label:'Sports'});
        this.breadCrumbItems.push({label:'Football'});
        this.breadCrumbItems.push({label:'Countries'});
        this.breadCrumbItems.push({label:'Spain'});
        this.breadCrumbItems.push({label:'Real Madrid'});
        this.breadCrumbItems.push({label:'Squad'});
        this.breadCrumbItems.push({label:'Sergio Ramos', url: 'https://de.wikipedia.org/wiki/Sergio_Ramos'});
    }

    public getBreadCrumbItems(): Array<MenuItem> {
        return this.breadCrumbItems
    }
}
