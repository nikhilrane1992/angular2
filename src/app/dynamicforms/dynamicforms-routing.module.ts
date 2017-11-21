import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicformsComponent } from "./dynamicforms.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: DynamicformsComponent}])
    ],
    exports: [RouterModule]
})
export class DynamicformsRoutingModule {

}