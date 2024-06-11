import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../clientes.list';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss']
})
export class ClientDialogComponent implements OnInit{

  formGroup!: FormGroup;
  client!: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  get title() {
    return (this.client && this.client.id) ? 'Editar Cliente' : 'Cadastrar Cliente'
  }

  ngOnInit(): void {
    this.client = this.activatedRoute.snapshot.data["client"];
    this.formGroup = this.formBuilder.group({
      id: [(this.client && this.client.id) ? this.client.id : null],
      nome: [(this.client && this.client.nome) ? this.client.nome : '', Validators.required]
    })
  }

  save() {
    if(this.client && this.client.id) {
      this.clientService.update(this.formGroup?.value).subscribe(
        updatedClient => {
          this.router.navigateByUrl("/client");
        },
        error => {
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      )
    } else {
      this.clientService.register(this.formGroup?.value).subscribe(
        registedClient => {
          this.router.navigateByUrl("/client");
        },
        error => {
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      )
    }
  }
}
