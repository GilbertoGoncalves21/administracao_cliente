import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientDialogComponent } from './client-register/client-dialog/client-dialog.component';
import { ClientRegisterDailogComponent } from './client-register/client-register-dailog/client-register-dailog.component';
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
    ClientDialogComponent,
    ClientRegisterDailogComponent
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
