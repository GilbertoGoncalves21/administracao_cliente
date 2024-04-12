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
    { nome: "João Silva", email: "joao.silva@example.com", descricao: "Analista de Dados com experiência em visualização e interpretação de dados." },
    { nome: "Maria Santos", email: "maria.santos@example.com", descricao: "Desenvolvedora Full Stack apaixonada por JavaScript e frameworks modernos." },
    { nome: "Pedro Oliveira", email: "pedro.oliveira@example.com", descricao: "Engenheiro de Software especializado em arquitetura de microservices." },
    { nome: "Ana Souza", email: "ana.souza@example.com", descricao: "UX/UI Designer com foco em experiência do usuário e design responsivo." },
    { nome: "Lucas Ferreira", email: "lucas.ferreira@example.com", descricao: "Analista de Segurança da Informação com certificações em ethical hacking." },
    { nome: "Camila Pereira", email: "camila.pereira@example.com", descricao: "Scrum Master dedicada a facilitar o trabalho em equipe e melhorar a produtividade." },
    { nome: "Rafael Almeida", email: "rafael.almeida@example.com", descricao: "Engenheiro de DevOps com experiência em automação de infraestrutura." },
    { nome: "Patrícia Costa", email: "patricia.costa@example.com", descricao: "Analista de Marketing Digital com habilidades em SEO e marketing de conteúdo." },
    { nome: "Gustavo Santos", email: "gustavo.santos@example.com", descricao: "Desenvolvedor Mobile com foco em aplicativos nativos para iOS e Android." },
    { nome: "Carolina Lima", email: "carolina.lima@example.com", descricao: "Product Owner com experiência em planejamento estratégico de produtos digitais." },
    { nome: "Fernando Carvalho", email: "fernando.carvalho@example.com", descricao: "Engenheiro de Machine Learning interessado em inteligência artificial e análise preditiva." },
    { nome: "Aline Rodrigues", email: "aline.rodrigues@example.com", descricao: "Analista de Suporte Técnico com habilidades em troubleshooting e atendimento ao cliente." },
    { nome: "Marcelo Oliveira", email: "marcelo.oliveira@example.com", descricao: "Arquiteto de Software com experiência em design de sistemas escaláveis e resilientes." },
    { nome: "Juliana Mendes", email: "juliana.mendes@example.com", descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas." },
    { nome: "Roberto Pereira", email: "roberto.pereira@example.com", descricao: "Engenheiro de Redes especializado em infraestrutura de data centers." },
    { nome: "Carla Silva", email: "carla.silva@example.com", descricao: "Analista de Qualidade de Software com experiência em testes automatizados." },
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
