import { AuthModule } from './blog/common/auth/AuthModule';
import { MatToolbarModule } from '@angular/material';
import { CommonMaterialModules } from './blog/common/material/CommonMaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import { LoginModule } from './login/LoginModule';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatToolbarModule,
    AuthModule,
    CommonMaterialModules,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
    BlogModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
