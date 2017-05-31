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
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {BreadCrumbService} from './theme-services/breadcrumb.service';
import {MenuItem, SelectItem} from 'primeng/primeng';
import {ButtonService} from './theme-services/button.service';
import {TableService} from './theme-services/table.service';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    providers: [
        BreadCrumbService,
        ButtonService,
        TableService
    ]
})
export class ThemeComponent implements OnInit {

    public primengBaseDocumentationUrl = 'https://www.primefaces.org/primeng/#/';
    private breadCrumbItems: Array<MenuItem>;
    private splitButtonItems: Array<MenuItem>;
    private selectButtonItems: Array<SelectItem>;
    private tableItems: Array<any>;
    private tableColumns: Array<any>;
    private fb: FormBuilder;
    private userform: FormGroup;
    private genders: SelectItem[];

    constructor(private breadCrumbService: BreadCrumbService,
                private buttonService: ButtonService,
                private tableService: TableService) {
        this.fb = new FormBuilder();
    }

    ngOnInit() {
        this.breadCrumbItems = this.breadCrumbService.getBreadCrumbItems();
        this.splitButtonItems = this.buttonService.getSplitButtonItems();
        this.selectButtonItems = this.buttonService.getSelectButtonItems();
        this.tableItems = this.tableService.getTableItems();
        this.tableColumns = this.tableService.getTableColumns();
        this.initUserForm();
    }

    initUserForm() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label: 'Select Gender', value: ''});
        this.genders.push({label: 'Male', value: 'Male'});
        this.genders.push({label: 'Female', value: 'Female'});
    }

    onSubmit(formValue): void {
        console.log('You submitted', formValue);
    }
}
