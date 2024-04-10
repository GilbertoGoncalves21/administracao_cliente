import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class PagesModule {}