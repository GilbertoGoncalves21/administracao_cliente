import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { CLIENTES } from './clientes.list';

@Component({
  selector: 'app-client-register',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  private _dataSource = new MatTableDataSource(CLIENTES);

  constructor(public dialog: MatDialog) {}

  @ViewChild('input') input: any;

  get dataSource() {
    return this._dataSource;
  }

  openDialog(cliente: any): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: { cliente: cliente },
      width: '70%',
      height: '60&'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearFilter() {
    this.input.value = ''; 
    this.applyFilter(new Event('')); 
  }
}