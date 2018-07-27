import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../material/material.module';
import {MatInputModule} from '@angular/material';

import {AppComponentOneModule} from '../component-one/component-one.module';
import {AppComponentTwoModule} from '../component-two/component-two.module';

import {MainComponent} from './';


@NgModule({
    imports: [
        MaterialModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AppComponentOneModule,
        AppComponentTwoModule,
    ],
    declarations: [
        MainComponent,
    ],
    entryComponents: [],
    providers: [],
    exports: [
      MainComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMainModule {
}
