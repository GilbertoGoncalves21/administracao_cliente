export interface Client {
  id: number,
  nome: string;
  dataNascimento: Date;
  estadoCivil: string;
  documento: string;
  tipoPessoa: 'Fisica' | 'Juridica';
  enderecos: Adress[];
}

export interface Adress {
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}