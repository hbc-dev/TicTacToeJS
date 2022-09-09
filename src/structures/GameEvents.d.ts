import {EventEmitter} from 'node:events';
import {
    events,
    eventsOptions
} from './GameEvents.Interfaces'

export = class GameEvents extends EventEmitter {
    on<K extends keyof events>(eventName: K, callback: events[K], ...rest: any[]): void;
    once<K extends keyof events>(eventName: K, callback: events[K], ...rest: any[]): void;
    emit<K extends keyof eventsOptions>(eventName: K, ...options: eventsOptions[K]): void;
    addListener<K extends keyof events>(eventName: K, callback: events[K], ...rest: any[]): void;
}