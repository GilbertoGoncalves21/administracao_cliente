import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from '../clientes.list';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cliente: Client }
  ) { }

  get cliente() {
    return this.data.cliente
  }

  editarCliente(): void {
    console.log('Editar cliente');
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }
}
