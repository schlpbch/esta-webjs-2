/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Definition des NewsfetcherService.
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    endpointUrl: string = 'http://jsonplaceholder.typicode.com/posts';

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
