/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 *
 * ESTA WebJS: Message-Service.
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 14.07.2016, 2016.
 */
import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';
import {Router, NavigationEnd} from '@angular/router';
import {IMessage} from './message.model.ts';
import {MessageType} from './messagetype.model.ts';

@Injectable()
export class MessagesService {
    private _messages = new Subject<IMessage>();

    constructor(private router: Router) {
        router.events.subscribe(routeEvent => {
            if (routeEvent instanceof NavigationEnd) {
                this.clearMessage();
            }
        });
    }

    get messages() {
        return this._messages;
    }

    clearMessage() {
        this._messages.next(null);
    }

    successMessage(msg: string) {
        this._addMessage(msg, MessageType.SUCCESS);
    }

    errorMessage(msg: string) {
        this._addMessage(msg, MessageType.ERROR);
    }

    infoMessage(msg: string) {
        this._addMessage(msg, MessageType.INFO);
    }

    _addMessage(msg: string, type: MessageType) {
        this._messages.next({
            message: msg,
            type: type
        });
    }
}
