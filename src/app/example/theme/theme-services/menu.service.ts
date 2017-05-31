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

    constructor() {
        this.menuItems = this.createMenuItems();
        this.panelMenuItems = this.createPanelMenuItems();
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
                        ]}
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

    public getMenuItems(): Array<MenuItem>{
        return this.menuItems;
    }

    public getPanelMenuItems(): Array<MenuItem>{
        return this.panelMenuItems;
    }
}