import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/pages/client-register/clientes.list';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl: string = 'http://localhost:3000'
  private endpoint: string = 'client'

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrl}/${this.endpoint}`);
  }

  register(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.baseUrl}/${this.endpoint}`, client);
  }

  searchForId(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  update(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.baseUrl}/${this.endpoint}/${client.id}`, client);
  }

  delete(client: Client): Observable<{}> {
    return this.httpClient.delete<Client>(`${this.baseUrl}/${this.endpoint}/${client.id}`);
  }
}
