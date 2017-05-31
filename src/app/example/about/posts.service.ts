/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Page Object für die About Seite
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 10.05.2017, 2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    private endpointUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }

    getAllPosts() {
        return this.http.get(this.endpointUrl)
            .map(res => res.json());
    }

    getPostById(id) {
        return this.http.get(this.endpointUrl + '/' + id)
            .map(res => res.json());
    }
}
