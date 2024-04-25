import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    AddButtonComponent
  ]
})
export class SharedModule { }
