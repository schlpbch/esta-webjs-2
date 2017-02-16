import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/posts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [PostsService]
})
export class AboutComponent implements OnInit {
  aboutMessage: string;
  posts: any[];
  postById: any;

  constructor(private postsService: PostsService) {
    this.aboutMessage = 'Über dieses Template';
  }

  ngOnInit(): any {
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
    this.postsService.getPostById(40).subscribe(post => this.postById = post);
  }

  changeLanguage(lang) {
    // this.messagesService
    //     .errorMessage('Es gibt noch keine offizielle Lösung fuer i18n in Angular2. Sprache: ' + lang);
  }
}
