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
import {PostsService} from './posts.service';
import {TranslateService} from '@ngx-translate/core';
import {Message} from 'primeng/primeng';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    providers: [PostsService]
})
export class AboutComponent implements OnInit {
    aboutMessage: string;
    posts: any[];
    postById: any;
    messages: Array<Message> = [];

    constructor(private postsService: PostsService,
                private translateService: TranslateService) {

        this.aboutMessage = 'Über dieses Template';
    }

    ngOnInit(): any {
        this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
        this.postsService.getPostById(40).subscribe(post => this.postById = post);
    }

    createMessages() {
        this.messages.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
        this.messages.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
        this.messages.push({severity: 'error', summary: 'Error Message', detail: 'Sample error'});
    }

    changeLanguage(lang) {
        this.translateService.use(lang);
    }
}
