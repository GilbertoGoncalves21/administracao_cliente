import { Component } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirmação</h1>
    <div mat-dialog-content>
      <p>Confirma a operação?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancelar</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Confirmar</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor() { }
}