import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { ClientService } from './client.service';
import { Client } from './clientes.list';

@Injectable({
  providedIn: 'root'
})
export class ClientResolverService implements Resolve<Client> {

  constructor(private clientService: ClientService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["nome"];
    if (id) {
      return this.clientService.searchForId(id);
    }
    
    return empty();
  }
}
