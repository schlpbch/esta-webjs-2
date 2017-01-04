/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Definition der About-Komponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {Component, OnInit} from '@angular/core';
import {PostsService} from '../common/posts/posts.service.ts';
import {MessagesService} from '../common/messages/messages.service.ts';

@Component({
    selector: 'about-component',
    template: `
        <main>
    <div class="container">
        <div class="jumbotron">
            <div>
                <h1>{{ aboutMessage }} <small>Eine Demoseite</small>
                </h1>
            </div>
            <div class="container">
                <section>
                    <h2>Anmeldung</h2>
                    <p>Hier werden Informationen über ESTA WebJS gezeigt.</p>
                    <button class="btn btn-primary" (click)="changeLanguage('de')">Deutsch</button>
                    <button class="btn btn-default" (click)="changeLanguage('en')">English</button>
                </section>
            </div>
            <div class="spacer"></div>
            <div class="container">
                <section>
                    <h2>Per Http-Service geladene Posts</h2>

                    <p>Im Viewmodel sind {{ posts?.length }} Posts vorhanden</p>

                    <p>Der erste Post hat den Titel: </p>
                    <pre>{{ posts ? posts[0].title : '' }}</pre>

                    <p>Der Post mit der Id {{ postById?.id }} hat den Titel:</p>
                    <pre>{{ postById?.title }}</pre>
                </section>
            </div>
        </div>
    </div>
</main>
    `,
    providers: [PostsService]
})
export class AboutComponent implements OnInit {
    aboutMessage: string;
    posts: any[];
    postById: any;

    constructor(private postsService: PostsService, private messagesService: MessagesService) {
        this.aboutMessage = 'Über dieses Template';
    }

    ngOnInit(): any {
        this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
        this.postsService.getPostById(40).subscribe(post => this.postById = post);
    }

    changeLanguage(lang) {
        this.messagesService
            .errorMessage('Es gibt noch keine offizielle Lösung fuer i18n in Angular2. Sprache: ' + lang);
    }
}
