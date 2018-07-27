import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Moment } from 'moment';
import * as moment from 'moment';

@Injectable()
export class ComponentTwoService {

  private messageSource = new BehaviorSubject<Moment>(moment());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Moment) {
    this.messageSource.next(message)
  }

}
