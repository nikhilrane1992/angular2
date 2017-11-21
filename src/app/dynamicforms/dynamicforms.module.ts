import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { DynamicformsComponent } from "./dynamicforms.component";
import { DynamicformsRoutingModule } from "./dynamicforms-routing.module";


@NgModule({
    declarations: [
        DynamicformsComponent
    ],
    imports: [
        CommonModule, 
        DynamicformsRoutingModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,   
    ]
})

export class DynamicformsModule {

}