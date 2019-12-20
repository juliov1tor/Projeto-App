import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from './../common/material/CommonMaterialModules';
import { CreatePostDialogComponent } from './dialogs/CreatePostDialogComponent';
import { NgModule } from '@angular/core';
import { PostListMolule } from './list/PostListModule';
import { PostService } from './services/PostService';
import { PostResource } from './services/PostResource';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [        
        PostListMolule,
        FormsModule,
        CommonModule,
        CommonMaterialModules

    ],
    exports: [
        PostListMolule,
    ],
    declarations: [
        CreatePostDialogComponent
    ],
    entryComponents: [
        CreatePostDialogComponent
    ],
    providers: [
        PostService,
        PostResource
    ],
})
export class PostsModule { }
