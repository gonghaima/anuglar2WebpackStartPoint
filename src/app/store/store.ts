import * as counter from '../../app/reducer/counter';
import {provideStore, combineReducers} from '@ngrx/store';

const reducer = combineReducers(counter);

export const store =provideStore(reducer);