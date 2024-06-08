import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AddClientDialogComponent } from './client-register/client-dialog/add-client-dialog.component';
import { ClientComponent } from './client-register/client.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import {MatTableModule} from '@angular/material/table';

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
    SharedModule
  ],
})
export class PagesModule {}
