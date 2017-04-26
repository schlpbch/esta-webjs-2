/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PipeTransform, Pipe} from '@angular/core';

import {AboutComponent} from './about.component';
import {TranslateService} from "@ngx-translate/core";
import {XHRBackend, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {NotificationsService} from "angular2-notifications";
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return undefined;
    }
}

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    class NotificationServiceMock {
    }
    class TranslateServiceMock {
    }

    class MockPostsService {
        public getAllPosts() {
            return Observable.of([
                {
                    id: 26,
                    title: 'hi 1',
                },
                {
                    id: 27,
                    title: 'hi 2',
                }
            ]);
        }

        public getPostById(id) {
            return Observable.of(
                {
                    id: id,
                    title: 'hi 4',
                });
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [AboutComponent, MockPipe],
            providers: [{provide: XHRBackend, useClass: MockBackend},
                {provide: NotificationsService, useClass: NotificationServiceMock},
                {provide: TranslateService, useValue: TranslateServiceMock}
            ]
        })
            .overrideComponent(AboutComponent, {
                set: {
                    providers: [
                        {provide: PostsService, useClass: MockPostsService}
                    ]
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed
            .createComponent(AboutComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('has a name property [aboutMessage]', () => {
        expect(component.aboutMessage).toBe('Über dieses Template');
    });

    it('onInit should subscribe to PostsService [getAllPosts]', () => {
        component.ngOnInit();
        expect(component.posts.length).toBe(2);
        expect(component.posts[0].title).toBe('hi 1');
        expect(component.posts[1].title).toBe('hi 2');
    });

    it('onInit should subscribe to PostsService [getPostById]', () => {
        component.ngOnInit();
        expect(component.postById.title).toBe('hi 4');
    });
});
