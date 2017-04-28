import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
import {NotificationsService} from "angular2-notifications";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [PostsService]
})
export class AboutComponent implements OnInit {
  aboutMessage: string;
  posts: any[];
  postById: any;

  constructor(private postsService: PostsService, private notificationService: NotificationsService,
              private translateService: TranslateService) {

    this.aboutMessage = 'Über dieses Template';
  }

  ngOnInit(): any {
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
    this.postsService.getPostById(40).subscribe(post => this.postById = post);
  }

  createMessages() {
      this.notificationService.success('Erfolg', 'Ich bin eine Erfolgsmeldung');
      this.notificationService.info('Info', 'Ich bin eine Infomeldung');
      this.notificationService.error('Fehler', 'Ich bin eine Fehlermeldung');
  }

  changeLanguage(lang) {
      this.translateService.use(lang);
  }
}
