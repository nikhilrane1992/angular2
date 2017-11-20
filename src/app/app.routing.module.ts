import { NgModule } from "@angular/core/src/metadata/ng_module";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: '.users/user.module#UserModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}