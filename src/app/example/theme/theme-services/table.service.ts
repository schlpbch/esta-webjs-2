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

@Injectable()
export class TableService {

    private tableItems: Array<any>;
    private tableColumns: Array<string>;

    constructor() {
        this.tableItems = this.createTableItems();
        this.tableColumns = this.createTableColumns();
    }

    private createTableColumns() {
        let columns: Array<string> = [];
        columns.push(this.createColumn('firstname', 'firstname'));
        columns.push(this.createColumn('lastname', 'lastname'));
        columns.push(this.createColumn('position', 'position'));
        columns.push(this.createColumn('club', 'club'));
        return columns;
    }

    private createColumn(field: string, header: string): any {
        return {field, header};
    }

    private createTableItems(): Array<any> {
        let players: Array<any> = []
        players.push(this.createPlayer('Cristiano', 'Ronaldo', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Karmi', 'Benzema', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Sergio', 'Ramos', 'Defender', 'Real Madrid'));
        players.push(this.createPlayer('Gareth', 'Bale', 'Striker', 'Real Madrid'));
        players.push(this.createPlayer('Luca', 'Modric', 'Midfielder', 'Real Madrid'));
        return players;
    }

    private createPlayer(firstname: string, lastname: string, position: string, club: string) {
        return {firstname, lastname, position, club};
    }

    public getTableItems(): Array<any> {
        return this.tableItems;
    }

    public getTableColumns(): Array<any> {
        return this.tableColumns;
    }
}
