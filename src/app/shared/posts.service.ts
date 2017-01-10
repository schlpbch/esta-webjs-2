import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
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
