import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from '../material/material.module';
import { AddClientDialogComponent } from './client-register/add-client-dialog/add-client-dialog.component';
import { ClientComponent } from './client-register/client.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ClientComponent,
    ForgotPasswordComponent,
    AddClientDialogComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    MaterialModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class PagesModule {}
