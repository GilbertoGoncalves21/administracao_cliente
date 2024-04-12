import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent {
  cliente: any;

  constructor(
    public dialogRef: MatDialogRef<AddClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cliente: any }
  ) {
    this.cliente = data.cliente;
  }

  editarCliente(): void {
    // Implemente a lógica para edição do cliente aqui
    console.log('Editar cliente:', this.cliente);
    // Feche o diálogo após editar o cliente
    this.dialogRef.close();
  }

  fecharDialog(): void {
    // Feche o diálogo sem realizar nenhuma ação
    this.dialogRef.close();
  }
}
