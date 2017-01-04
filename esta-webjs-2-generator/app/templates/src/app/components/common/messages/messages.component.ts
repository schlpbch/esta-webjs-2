/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 *
 * ESTA WebJS: Message-Komponente.
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 14.07.2016, 2016.
 */
import {Component, OnInit} from '@angular/core';
import {MessagesService} from './messages.service';
import {MessageType} from './messagetype.model';
import {IMessage} from './message.model';

@Component({
    selector: 'messages-component',
    template: `
        <aside>
            <div class="container">
                <div >
                    <div *ngIf="message" class="alert-animation alert alert-{{ getClassForType(message.type) }}">
                        {{ message.message }}
                        <a class="close" (click)="clearMessage()">&times;</a>
                    </div>
                </div>
             </div>
        </aside>
    `,
    styles: [
        `
        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        
        .alert-animation {
            animation: fadein 1s;
        }
        `
    ]
})
export class MessagesComponent implements OnInit {
    message: IMessage;
    
    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
        this.messagesService.messages.subscribe(m => {
            this.message = m;
        });
    }

    clearMessage() {
        this.messagesService.clearMessage();
    }
    
    getClassForType(messageType: MessageType) {
        switch (messageType) {
            case MessageType.ERROR:
                return 'danger';
            case MessageType.INFO:
                return 'info';
            case MessageType.SUCCESS:
                return 'success';
        }
    }
}
