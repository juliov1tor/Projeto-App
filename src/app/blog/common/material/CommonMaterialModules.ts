import { MatCardModule, MatTableModule, MatProgressBarModule, MatIconModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatTooltipModule,
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatTooltipModule,
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules  { }
