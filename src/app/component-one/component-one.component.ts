import {Component, OnInit} from '@angular/core';
import {ComponentTwoService, HRIS_DATE_FORMATS} from "../component-two/";

import {Moment} from 'moment';

@Component({
    selector: 'app-component-one',
    templateUrl: './component-one.component.html'
})
export class ComponentOneComponent implements OnInit{

  currDate: string;

  constructor(public twoService: ComponentTwoService) {}

  ngOnInit() {
    this.twoService.currentMessage.subscribe(sessionDate => {
            this.currDate = sessionDate.format('MMMM D, YYYY').toString();
    });
  }

}
