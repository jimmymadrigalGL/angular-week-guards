import { Injectable } from '@angular/core';

import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private default: State = {
    handsWashed: true,
    items: ['Rice', 'Sugar', 'Coffe', 'Cereal', 'Beer']
  };
  public redirectUrl: string;
  public state: State = { ... this.default };


  constructor() {
    this.loadState();
  }

  public loadState() {
    const savedSatet = localStorage.getItem('state');
    if (savedSatet) {
      this.state = JSON.parse(savedSatet);
    }
  }

  public saveState(): void {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  public defaultState(): void {
    this.state = { ... this.default };
    this.saveState();
  }
}
