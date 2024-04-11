import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { CostumerConsultationComponent } from './costumer-consultation/costumer-consultation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ClientRegisterComponent,
    CostumerConsultationComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class PagesModule {}
