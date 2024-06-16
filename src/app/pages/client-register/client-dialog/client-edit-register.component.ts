import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../clientes';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-client-edit-register',
  templateUrl: './client-edit-register.component.html',
  styleUrls: ['./client-edit-register.component.scss'],
})
export class ClientEditRegisterComponent implements OnInit {
  formGroup!: FormGroup;
  client!: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    public matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    public matSnackBar: MatSnackBar
  ) { }

  get title() {
    return this.client && this.client.id
      ? 'Editar Cliente'
      : 'Cadastrar Cliente';
  }

  ngOnInit(): void {
    this.client = this.activatedRoute.snapshot.data['client'];
    this.formGroup = this.formBuilder.group({
      id: [this.client && this.client.id ? this.client.id : null],
      nome: [
        this.client && this.client.nome ? this.client.nome : '',
        Validators.required,
      ],
      document: [
        this.client && this.client.documento ? this.client.documento : '',
        Validators.required,
      ],
      civil_state: [
        this.client && this.client.estadoCivil ? this.client.estadoCivil : '',
        Validators.required,
      ],
      birth_date: [
        this.client && this.client.dataNascimento ? this.client.dataNascimento : '',
        Validators.required,
      ]
    });
  }

  save() {
    if (this.client && this.client.id) {
      this.clientService.update(this.formGroup?.value).subscribe(
        (updatedClient) => {
          this.router.navigateByUrl('/client');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    } else {
      const newClient = { ...this.formGroup.value, id: uuidv4() };
      this.clientService.register(newClient).subscribe(
        (registedClient) => {
          this.router.navigateByUrl('/client');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }

  deletar() {
    const dialogoReferencia = this.matDialog.open(ConfirmDialogComponent);

    dialogoReferencia.afterClosed().subscribe((valorResposta) => {
      if (valorResposta) {
        this.clientService.delete(this.client).subscribe({
          next: (response) => {
            this.matSnackBar.open("Item deletado com sucesso!", undefined, {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/client");
          },
          error: (error) => {
            this.matSnackBar.open("Erro ao deletar", undefined, {
              duration: 5000,
              panelClass: "red-snackbar",
            });
          },
        });
      }
    });
  }
}
