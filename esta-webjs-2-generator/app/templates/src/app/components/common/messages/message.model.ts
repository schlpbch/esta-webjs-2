/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 *
 * ESTA WebJS: Message-Model.
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 14.07.2016, 2016.
 */
import {MessageType} from './messagetype.model';
export interface IMessage {
    message: string;
    type: MessageType;
}
