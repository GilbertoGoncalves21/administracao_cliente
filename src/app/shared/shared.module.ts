import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
