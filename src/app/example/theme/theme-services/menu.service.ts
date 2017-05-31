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
export class MenuService {

    private menuItems: MenuItem[];
    private panelMenuItems: MenuItem[];
    private megaMenuItems: MenuItem[];

    constructor() {
        this.menuItems = this.createMenuItems();
        this.panelMenuItems = this.createPanelMenuItems();
        this.megaMenuItems = this.createMegaMenuItems()
    }

    private createMegaMenuItems(): Array<MenuItem> {
        return [
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

    private createPanelMenuItems(): Array<MenuItem> {
        return [
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

    private createMenuItems(): Array<MenuItem> {
        return [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
            {
                label: 'Edit',
                items: [
                    {label: 'Undo', icon: 'fa-refresh'},
                    {label: 'Redo', icon: 'fa-repeat'}
                ]
            }];
    }

    public getMenuItems(): Array<MenuItem> {
        return this.menuItems;
    }

    public getPanelMenuItems(): Array<MenuItem> {
        return this.panelMenuItems;
    }

    public getMegaMenuItems(): Array<MenuItem> {
        return this.megaMenuItems;
    }
}