import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ComponentOneComponent} from './';
import {ComponentTwoService} from '../component-two';

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
        ComponentOneComponent
    ],
    entryComponents: [
    ],
    providers: [
        ComponentTwoService
    ],
    exports: [
      ComponentOneComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponentOneModule {
}
