/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Unit-Tests Messages
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */
import {beforeEachProviders, beforeEach, inject, describe, it, expect} from '@angular/core/testing';
import {MessagesComponent} from './messages.component.ts';
import {MessagesService} from './messages.service.ts';
import {IMessage} from './message.model.ts';
import {Subject} from 'rxjs/Subject';
import {MessageType} from './messagetype.model.ts';
import {Router} from '@angular/router';

class MockMessagesService {
    private _messages = new Subject<IMessage>();

    clearMessage() {
    }

    get messages() {
        return this._messages;
    }

    errorMessage(msg) {
        this._messages.next({
            message: msg,
            type: MessageType.ERROR
        });
    }
}

describe('MessagesComponent', () => {
    let comp: MessagesComponent;
    let service: MessagesService;

    beforeEachProviders(() => [
        {provide: MessagesService, useClass: MockMessagesService},
        MessagesComponent
    ]);

    beforeEach(inject([MessagesComponent, MessagesService], (_messagesComponent, _messagesService) => {
        comp = _messagesComponent;
        service = _messagesService;
    }));

    it('should subscribe to messagesService messages', () => {
        comp.ngOnInit();

        service.errorMessage('Test');

        expect(comp.message.message).toBe('Test');
    });

    it('clearMessage calls messageService.clearMessage()', () => {
        spyOn(service, 'clearMessage');

        comp.clearMessage();

        expect(service.clearMessage).toHaveBeenCalled();
    });

    it('should return danger when MessageType = ERROR', () => {
        expect(comp.getClassForType(MessageType.ERROR)).toBe('danger');
    });

    it('should return danger when MessageType = INFO', () => {
        expect(comp.getClassForType(MessageType.INFO)).toBe('info');
    });

    it('should return danger when MessageType = SUCCESS', () => {
        expect(comp.getClassForType(MessageType.SUCCESS)).toBe('success');
    });
});

class MockRouter {
    events = new Subject();
}

describe('MessagesService', () => {
    let service: MessagesService;
    let router: Router;

    beforeEachProviders(() => [
        {provide: Router, useClass: MockRouter},
        MessagesService
    ]);

    beforeEach(inject([MessagesService, Router], (_messagesService, _router) => {
        router = _router;
        service = _messagesService;
    }));

    it('should send a message on successMessage() to subscribers', (done) => {
        let observer = x => {
            expect(x.message).toBe('test');
            expect(x.type).toBe(MessageType.SUCCESS);
            done();
        };

        service.messages.subscribe(observer);

        service.successMessage('test');
    });

    it('should send a message on errorMessage() to subscribers', (done) => {
        let observer = x => {
            expect(x.message).toBe('test');
            expect(x.type).toBe(MessageType.ERROR);
            done();
        };

        service.messages.subscribe(observer);

        service.errorMessage('test');
    });

    it('should send a message on infoMessage() to subscribers', (done) => {
        let observer = x => {
            expect(x.message).toBe('test');
            expect(x.type).toBe(MessageType.INFO);
            done();
        };

        service.messages.subscribe(observer);

        service.infoMessage('test');
    });

    it('should send empty message when clearMessage() is called', (done) => {
        let observer = x => {
            expect(x).toBe(null);
            done();
        };

        service.messages.subscribe(observer);

        service.clearMessage();
    });
});
