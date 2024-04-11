import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';

@Component({
  selector: 'app-client-register',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  constructor(public dialog: MatDialog) {}

  clientes = [
    { nome: "Cliente 2", email: "cliente2@example.com", descricao: "Descrição do Cliente 2" },
    { nome: "Cliente 2", email: "cliente2@example.com", descricao: "Descrição do Cliente 2" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 1", email: "cliente1@example.com", descricao: "Descrição do Cliente 1" },
    { nome: "Cliente 1", email: "cliente1@example.com", descricao: "Descrição do Cliente 1" },
    { nome: "Cliente 2", email: "cliente2@example.com", descricao: "Descrição do Cliente 2" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 1", email: "cliente1@example.com", descricao: "Descrição do Cliente 1" },
    { nome: "Cliente 2", email: "cliente2@example.com", descricao: "Descrição do Cliente 2" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
    { nome: "Cliente 3", email: "cliente3@example.com", descricao: "Descrição do Cliente 3" },
  ];

  openDialog(cliente: any): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: { cliente: cliente }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }
}
