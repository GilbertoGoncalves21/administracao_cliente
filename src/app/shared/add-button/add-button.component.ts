import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-button',
  template: `
    <button mat-button [matMenuTriggerFor]="aboveMenu"><mat-icon>plus_one</mat-icon></button>
    <mat-menu #aboveMenu="matMenu" yPosition="above">
      <button mat-menu-item (click)="firstOption()">{{firstItem}}</button>
      <button mat-menu-item (click)="secondOption()">{{secondItem}}</button>
      <button mat-menu-item (click)="thirdOption()">{{thirdItem}}</button>
    </mat-menu>
  `,
})
export class AddButtonComponent {
  get firstItem() {
    return ;
  }

  get secondItem() {
    return
  }

  get thirdItem() {
    return
  }

  firstOption(): void {
    console.log('Primeira Opção selecionada');
  }

  secondOption(): void {
    console.log('Segunda Opção selecionada');
  }

  thirdOption(): void {
    console.log('Terceira Opção selecionada');
  }
}

export interface MenuItem {
  label: string; // Rótulo do item do menu
  action: () => void; // Ação a ser executada quando o item do menu é clicado
}

