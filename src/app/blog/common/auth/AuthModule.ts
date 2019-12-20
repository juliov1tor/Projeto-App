import { AuthService } from './service/AuthService';
import { AuthResource } from './service/AuthResource';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthResource,
        AuthService
    ],
})
export class AuthModule {
}