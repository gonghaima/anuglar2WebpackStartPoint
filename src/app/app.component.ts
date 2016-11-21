import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Store, provideStore } from '@ngrx/store';
import { counter } from '../app/reducer/counter';
import { store } from '../app/store/store';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [store]
})
export class AppComponent {
  _counter: any;
  _textModifier: any;
  constructor(private store: Store<any>) {
    this._counter = store.select('counter');
    this._textModifier = store.select('textModifier');
    console.log("Hello Steven!");
  }

  clicktest() {
    console.log("Steven clicked!");
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT" })
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT" })
  }

  adda(input:string) {
    this.store.dispatch({ type: "a", payload:input})
  }

  addb() {
    this.store.dispatch({ type: "b" })
  }
}
