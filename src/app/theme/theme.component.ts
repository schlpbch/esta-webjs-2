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
import {MenuItem, SelectItem, Message} from 'primeng/primeng';


@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

    public bootstrapDocumentationUrl = 'https://v4-alpha.getbootstrap.com/components';
    private msgs: Message[] = [];
    private tabMenuItems: MenuItem[];
    private breadCrumbItems: MenuItem[];
    private megaMenuItems: MenuItem[];
    private contextMenuItems: MenuItem[];
    private panelMenuItems: MenuItem[];
    private selectItems: SelectItem[];
    private selectedItem: string;
    private cars: Car[];
    private options: SelectItem[];
    private filteredCountriesSingle: any[];
    private countries: any[] = [
        {name: 'Switzerland'},
        {name: 'France'},
        {name: 'Sweden'},
    ];
    private val: string;
    private splitMenuItems: MenuItem[];
    private display: boolean = false;


    constructor() {
    }

    ngOnInit() {
        this.createBreadCrumb();
        this.createMeagMenu();
        this.createContextMenu();
        this.createPanelMenuItems();
        this.createSelectItems();
        this.createSplitMenuItems();
        this.createListBoxOptions();
        this.createCars();
        this.createTabMenuItems();
    }

    private createTabMenuItems(){
        this.tabMenuItems = [
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];
    }

    private createCars(){
        this.cars = this.getCarsSmall();
    }

    private createListBoxOptions() {
        this.options = [];
        this.options.push({label: 'Option 1', value: 'Option 1'});
        this.options.push({label: 'Option 2', value: 'Option 2'});
        this.options.push({label: 'Option 3', value: 'Option 3'});
        this.options.push({label: 'Option 4', value: 'Option 4'});
        this.options.push({label: 'Option 5', value: 'Option 5'});
    }

    private createSplitMenuItems() {
        this.splitMenuItems = [
            {label: 'Update', icon: 'fa-refresh'},
            {label: 'Delete', icon: 'fa-close'},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
        ];
    }

    private createSelectItems() {
        this.selectItems = [];
        this.selectItems.push({label: 'New York', value: 'New York'});
        this.selectItems.push({label: 'Rome', value: 'Rome'});
        this.selectItems.push({label: 'London', value: 'London'});
        this.selectItems.push({label: 'Istanbul', value: 'Istanbul'});
        this.selectItems.push({label: 'Paris', value: 'Paris'});
    }

    private createPanelMenuItems() {
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }

    private
    createContextMenu() {
        this.contextMenuItems = [
            {label: 'New', icon: 'fa-plus'},
            {label: 'Open', icon: 'fa-download'},
            {label: 'Undo', icon: 'fa-refresh'}
        ];
    }

    private createMeagMenu() {
        this.megaMenuItems = [
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}]
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
                        },
                        {
                            label: 'TV 4',
                            items: [{label: 'TV 4.1'}, {label: 'TV 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
                        },
                        {
                            label: 'Sports 2',
                            items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
                        },
                        {
                            label: 'Sports 4',
                            items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
                        },
                        {
                            label: 'Sports 6',
                            items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
                        }
                    ]
                ]
            }
        ];
    }

    private createBreadCrumb() {
        this.breadCrumbItems = [];
        this.breadCrumbItems.push({label: 'Categories'});
        this.breadCrumbItems.push({label: 'Sports'});
        this.breadCrumbItems.push({label: 'Football'});
        this.breadCrumbItems.push({label: 'Countries'});
        this.breadCrumbItems.push({label: 'Spain'});
        this.breadCrumbItems.push({label: 'Real Madrid'});
        this.breadCrumbItems.push({label: 'Squad'});
        this.breadCrumbItems.push({label: 'Sergio Ramos', url: 'https://de.wikipedia.org/wiki/Sergio_Ramos'});
    }

    filterCountrySingle(event) {
        let query = event.query;
        this.filteredCountriesSingle = this.filterCountry(query, this.countries);
    }

    filterCountry(query, countries: any[]): any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    public showDialog() {
        this.display = true;
    }

    private getCarsSmall() {
        let cars = Array<Car>();
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        cars.push(this.createCar('dkdksf', 2012, 'VW', 'Orange'));
        return cars;
    }

    private createCar(vin, year, brand, color) {
        return {vin, year, brand, color}
    }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'PrimeNG rocks'});
    }

    showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }

    showMultiple() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
    }

    clear() {
        this.msgs = [];
    }
}

export interface Car {
    vin;
    year;
    brand;
    color;
}