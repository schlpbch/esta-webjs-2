// /**
//  * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
//  *
//  * ESTA WebJS: Unit-Tests About
//  *
//  * @author u220374 (Reto Lehmann)
//  * @version: 2.0.0
//  * @since 23.10.2015, 2015.
//  */
// import {beforeEachProviders, beforeEach, inject} from '@angular/core/testing';
// import {describe, it, expect} from '@angular/core/testing';
// import {AboutComponent} from './about.component.ts';
// import {MessagesService} from '../common/messages/messages.service.ts';
// import {PostsService} from '../common/posts/posts.service.ts';
// import {Observable}    from 'rxjs/Rx';
//
// class MockMessagesService {
// }
// class MockPostsService {
//     getAllPosts() {
//         return Observable.of([
//             {
//                 id: 26,
//                 title: 'hi 1',
//             },
//             {
//                 id: 27,
//                 title: 'hi 2',
//             }
//         ]);
//     }
//
//     getPostById(id) {
//         return Observable.of(
//             {
//                 id: id,
//                 title: 'hi 4',
//             });
//     }
// }
//
// describe('AboutComponent', () => {
//     let comp;
//
//     beforeEachProviders(() => [
//         {provide: MessagesService, useClass: MockMessagesService},
//         {provide: PostsService, useClass: MockPostsService},
//         AboutComponent
//     ]);
//
//     beforeEach(inject([AboutComponent], _aboutComponent => {
//         comp = _aboutComponent;
//     }));
//
//     it('has a name property [aboutMessage]', () => {
//         expect(comp.aboutMessage).toBe('Über dieses Template');
//     });
//
//     it('onInit should subscribe to PostsService [getAllPosts]', () => {
//         comp.ngOnInit();
//         expect(comp.posts.length).toBe(2);
//         expect(comp.posts[0].title).toBe('hi 1');
//         expect(comp.posts[1].title).toBe('hi 2');
//     });
//
//     it('onInit should subscribe to PostsService [getPostById]', () => {
//         comp.ngOnInit();
//         expect(comp.postById.title).toBe('hi 4');
//     });
// });
