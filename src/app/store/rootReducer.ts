import { Action } from '@ngrx/store';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function rootReducer(state: any = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
			return state - 1;
		case RESET:
			return 0;
        default:
            return state;
    }
}