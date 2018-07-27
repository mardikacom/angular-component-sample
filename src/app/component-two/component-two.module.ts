import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ComponentTwoComponent, ComponentTwoService} from './';

import {MaterialModule} from '../material/material.module';
import {MatInputModule} from '@angular/material';


@NgModule({
    imports: [
        MaterialModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    declarations: [
        ComponentTwoComponent
    ],
    entryComponents: [
    ],
    providers: [
        ComponentTwoService
    ],
    exports: [
      ComponentTwoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponentTwoModule {
}
