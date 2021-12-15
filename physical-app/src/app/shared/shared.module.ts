import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
    ],
    exports: [
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
    ]
})
export class SharedModule { }
