import { CommonMaterialModules } from './../blog/common/material/CommonMaterialModules';
import {NgModule} from '@angular/core';
import {LoginComponent} from './LoginComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './LoginRoutes';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        FormsModule,
        RouterModule.forChild(LoginRoutes)
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule {
}