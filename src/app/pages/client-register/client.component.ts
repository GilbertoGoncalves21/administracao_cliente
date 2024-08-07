import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from './client.service';
import { Client } from './clientes';


@Component({
  selector: 'app-client-register',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients$: Observable<Client[]> | undefined;
  columnsTable: string[] = ['nome', 'documento']

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.listClient();
  }

  listClient() {
    this.clients$ = this.clientService.list();
  }
}