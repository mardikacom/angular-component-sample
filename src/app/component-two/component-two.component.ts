import {Component, EventEmitter,OnInit, Output} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as moment from 'moment';
import {Moment} from 'moment';
import {FormControl} from '@angular/forms';

import {MatDatepickerInputEvent} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {ComponentTwoService} from './component-two.service';

export const HRIS_DATE_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-component-two',
    templateUrl: './component-two.component.html',
    styleUrls: ['./component-two.scss'],
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: HRIS_DATE_FORMATS},
    ],
})

export class ComponentTwoComponent implements OnInit {

  events: string[] = [];

  public sessDate: FormControl;
    private globalVar: Moment;
    private localeLang: string;

    @Output() change = new EventEmitter<Moment>();

  constructor(private myService: ComponentTwoService,
                private adapter: DateAdapter<any>) {
        this.globalVar = moment();
    }

    ngOnInit(): void {

        this.localeLang = 'en';
        this.adapter.setLocale(this.localeLang);

        this.sessDate = new FormControl(moment());
        this.myService.currentMessage.subscribe((global) => {
            this.globalVar = global;
        });

    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

        this.events.push(`${type}: ${event.value}`);

        const a = `${event.value}`;
        const b = parseInt(a, 10);

        this.globalVar = moment.unix(b / 1000);
        this.change.emit(this.globalVar);

        this.myService.changeMessage(this.globalVar);
    }

}

