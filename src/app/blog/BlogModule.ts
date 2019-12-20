import { BlogGuard } from './guards/BlogGuard';
import { BlogRouting } from './BlogRouting';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponent';
import { PostsModule } from './posts/PostsModule';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonMaterialModules } from './common/material/CommonMaterialModules';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
        RouterModule.forChild(BlogRouting),
        CommonMaterialModules,
    ],
    providers: [
        BlogGuard,
    ],
    exports: [
        PostsModule,
        CommonMaterialModules,
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ]

})
export class BlogModule { }
