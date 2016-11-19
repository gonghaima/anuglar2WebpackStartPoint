import {provideStore} from '@ngrx/store';
import {counter} from '../../app/reducer/counter';

export const store= provideStore({counter});