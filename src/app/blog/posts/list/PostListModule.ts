import { CommonMaterialModules } from './../../common/material/CommonMaterialModules';
import {NgModule} from '@angular/core';
import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [], 
})

export class PostListMolule{
    
}