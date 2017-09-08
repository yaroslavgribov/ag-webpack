import { Store } from '@ngrx/store';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {
    great: string = 'Great!'
    observers: Observable<number>;
    counter: Observable<number>;

    constructor(private store: Store<any>) {
        this.counter = store.select('root');
    }

    ngOnInit(): void {
        this.observers = Observable.range(1,10).delay(1000);
    }

    increment(): void {
        this.store.dispatch({ type:'INCREMENT' });
    }
    decrement(): void {
        this.store.dispatch({ type:'DECREMENT' });
    }
    reset(): void {
        this.store.dispatch({ type:'RESET' });
    }
} 