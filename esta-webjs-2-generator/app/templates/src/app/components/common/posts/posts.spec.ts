// /**
//  * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
//  *
//  * ESTA WebJS: Unit-Tests PostsService
//  *
//  * @author u220374 (Reto Lehmann)
//  * @version: 2.0.0
//  * @since 23.10.2015, 2015.
//  */
// import {beforeEachProviders, beforeEach, inject, describe, it, expect} from '@angular/core/testing';
// import {PostsService} from './posts.service.ts';
// import {Http, BaseRequestOptions, ResponseOptions, Response} from '@angular/http';
// import {MockBackend} from '@angular/http/testing';
//
// describe('PostsService', () => {
//     let service: PostsService;
//     let mockBackend: MockBackend;
//
//     beforeEachProviders(() => [
//         MockBackend,
//         BaseRequestOptions,
//         {
//             provide: Http, useFactory: (backend, options) => {
//             return new Http(backend, options);
//         }, deps: [MockBackend, BaseRequestOptions]
//         },
//         PostsService
//     ]);
//
//     beforeEach(inject([MockBackend, PostsService], (_mockBackend, _postsService) => {
//         service = _postsService;
//         mockBackend = _mockBackend;
//     }));
//
//     it('returns observable in getAllPosts() ', (done) => {
//         let responseOptions = new ResponseOptions({
//             body: [{
//                 id: 1,
//                 msg: 'Hello'
//             }, {
//                 id: 2,
//                 msg: 'World'
//             }]
//         });
//
//         mockBackend.connections.subscribe(connection => {
//             connection.mockRespond(new Response(responseOptions));
//         });
//
//         let obs = service.getAllPosts();
//
//         obs.subscribe(r => {
//             expect(r[0].id).toBe(1);
//             expect(r[0].msg).toBe('Hello');
//             expect(r[1].id).toBe(2);
//             expect(r[1].msg).toBe('World');
//             done();
//         });
//     });
//
//     it('returns observable in getPostById(x) ', (done) => {
//         let responseOptions = new ResponseOptions({
//             body: {
//                 id: 1,
//                 msg: 'Hello'
//             }
//         });
//
//         mockBackend.connections.subscribe(connection => {
//             connection.mockRespond(new Response(responseOptions));
//         });
//
//         let obs = service.getPostById(1);
//
//         obs.subscribe(r => {
//             expect(r.id).toBe(1);
//             expect(r.msg).toBe('Hello');
//             done();
//         });
//     });
// });
