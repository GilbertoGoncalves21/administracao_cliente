export interface Client {
  nome: string;
  sexo: string;
  dataNascimento: Date;
  estadoCivil: string;
  documento: string; // Pode ser CPF ou CNPJ
  tipoPessoa: 'Fisica' | 'Juridica'; // Indica se é Pessoa Física ou Jurídica
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

const clientes = [
  {
    nome: "João Silva",
    email: "joao.silva@example.com",
    descricao: "Analista de Dados com experiência em visualização e interpretação de dados.",
    sexo: "Masculino",
    dataNascimento: new Date(1980, 5, 15),
    estadoCivil: "Solteiro",
    documento: "123.456.789-00", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "12345-678",
        endereco: "Rua A",
        numero: "100",
        complemento: "Apto 101",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP"
      }
    ]
  },
  {
    nome: "Maria Santos",
    email: "maria.santos@example.com",
    descricao: "Desenvolvedora Full Stack apaixonada por JavaScript e frameworks modernos.",
    sexo: "Feminino",
    dataNascimento: new Date(1985, 8, 25),
    estadoCivil: "Casada",
    documento: "12.345.678/0001-00", // CNPJ
    tipoPessoa: "Jurídica",
    enderecos: [
      {
        cep: "54321-987",
        endereco: "Av. B",
        numero: "200",
        complemento: "Sala 201",
        bairro: "Centro",
        cidade: "Rio de Janeiro",
        estado: "RJ"
      }
    ]
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    descricao: "Engenheiro de Software especializado em arquitetura de microservices.",
    sexo: "Masculino",
    dataNascimento: new Date(1982, 3, 12),
    estadoCivil: "Casado",
    documento: "789.123.456-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "98765-432",
        endereco: "Rua C",
        numero: "300",
        complemento: "Casa",
        bairro: "Centro",
        cidade: "Belo Horizonte",
        estado: "MG"
      }
    ]
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    descricao: "UX/UI Designer com foco em experiência do usuário e design responsivo.",
    sexo: "Feminino",
    dataNascimento: new Date(1984, 11, 8),
    estadoCivil: "Solteira",
    documento: "98.765.432/0001-54", // CNPJ
    tipoPessoa: "Jurídica",
    enderecos: [
      {
        cep: "13579-246",
        endereco: "Av. D",
        numero: "400",
        complemento: "Bloco B",
        bairro: "Centro",
        cidade: "Porto Alegre",
        estado: "RS"
      }
    ]
  },
  {
    nome: "Lucas Ferreira",
    email: "lucas.ferreira@example.com",
    descricao: "Analista de Segurança da Informação com certificações em ethical hacking.",
    sexo: "Masculino",
    dataNascimento: new Date(1987, 6, 20),
    estadoCivil: "Solteiro",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Rua E",
        numero: "500",
        complemento: "Bloco C",
        bairro: "Centro",
        cidade: "Curitiba",
        estado: "PR"
      }
    ]
  },
  {
    nome: "Camila Pereira",
    email: "camila.pereira@example.com",
    descricao: "Scrum Master dedicada a facilitar o trabalho em equipe e melhorar a produtividade.",
    sexo: "Feminino",
    dataNascimento: new Date(1989, 9, 10),
    estadoCivil: "Casada",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "67890-123",
        endereco: "Rua F",
        numero: "600",
        complemento: "Casa 1",
        bairro: "Centro",
        cidade: "Salvador",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Rafael Almeida",
    email: "rafael.almeida@example.com",
    descricao: "Engenheiro de DevOps com experiência em automação de infraestrutura.",
    sexo: "Masculino",
    dataNascimento: new Date(1986, 2, 5),
    estadoCivil: "Casado",
    documento: "456.789.012-34", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "78901-234",
        endereco: "Av. G",
        numero: "700",
        complemento: "Bloco D",
        bairro: "Centro",
        cidade: "Brasília",
        estado: "DF"
      }
    ]
  },
  {
    nome: "Patrícia Costa",
    email: "patricia.costa@example.com",
    descricao: "Analista de Marketing Digital com habilidades em SEO e marketing de conteúdo.",
    sexo: "Feminino",
    dataNascimento: new Date(1983, 7, 18),
    estadoCivil: "Solteira",
    documento: "567.890.123-45", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "89012-345",
        endereco: "Rua H",
        numero: "800",
        complemento: "Apto 201",
        bairro: "Centro",
        cidade: "Porto Velho",
        estado: "RO"
      }
    ]
  },
  {
    nome: "Gustavo Santos",
    email: "gustavo.santos@example.com",
    descricao: "Desenvolvedor Mobile com foco em aplicativos nativos para iOS e Android.",
    sexo: "Masculino",
    dataNascimento: new Date(1981, 4, 30),
    estadoCivil: "Casado",
    documento: "678.901.234-56", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "90123-456",
        endereco: "Av. I",
        numero: "900",
        complemento: "Casa 2",
        bairro: "Centro",
        cidade: "Manaus",
        estado: "AM"
      }
    ]
  },
  {
    nome: "Carolina Lima",
    email: "carolina.lima@example.com",
    descricao: "Product Owner com experiência em planejamento estratégico de produtos digitais.",
    sexo: "Feminino",
    dataNascimento: new Date(1980, 10, 3),
    estadoCivil: "Solteira",
    documento: "789.012.345-67", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "01234-567",
        endereco: "Av. J",
        numero: "1000",
        complemento: "Apto 301",
        bairro: "Centro",
        cidade: "Florianópolis",
        estado: "SC"
      }
    ]
  },
  {
    nome: "Fernando Carvalho",
    email: "fernando.carvalho@example.com",
    descricao: "Engenheiro de Machine Learning interessado em inteligência artificial e análise preditiva.",
    sexo: "Masculino",
    dataNascimento: new Date(1985, 1, 28),
    estadoCivil: "Casado",
    documento: "890.123.456-78", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "12345-678",
        endereco: "Rua K",
        numero: "1100",
        complemento: "Casa 3",
        bairro: "Centro",
        cidade: "Recife",
        estado: "PE"
      }
    ]
  },
  {
    nome: "Aline Rodrigues",
    email: "aline.rodrigues@example.com",
    descricao: "Analista de Suporte Técnico com habilidades em troubleshooting e atendimento ao cliente.",
    sexo: "Feminino",
    dataNascimento: new Date(1982, 11, 9),
    estadoCivil: "Solteira",
    documento: "901.234.567-89", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "23456-789",
        endereco: "Av. L",
        numero: "1200",
        complemento: "Apto 401",
        bairro: "Centro",
        cidade: "Campinas",
        estado: "SP"
      }
    ]
  },
  {
    nome: "Marcelo Oliveira",
    email: "marcelo.oliveira@example.com",
    descricao: "Arquiteto de Software com experiência em design de sistemas escaláveis e resilientes.",
    sexo: "Masculino",
    dataNascimento: new Date(1979, 2, 14),
    estadoCivil: "Casado",
    documento: "123.456.789-09", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "34567-890",
        endereco: "Av. M",
        numero: "1300",
        complemento: "Bloco E",
        bairro: "Centro",
        cidade: "Natal",
        estado: "RN"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  },
  {
    nome: "Carla Silva",
    email: "carla.silva@example.com",
    descricao: "Analista de Qualidade de Software com experiência em testes automatizados.",
    sexo: "Feminino",
    dataNascimento: new Date(1983, 11, 5),
    estadoCivil: "Casada",
    documento: "456.789.012-34", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "67890-123",
        endereco: "Av. P",
        numero: "1600",
        complemento: "Bloco F",
        bairro: "Centro",
        cidade: "Belém",
        estado: "PA"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  },
  {
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    descricao: "Designer Gráfica com ênfase em identidade visual e criação de marcas.",
    sexo: "Feminino",
    dataNascimento: new Date(1986, 7, 22),
    estadoCivil: "Solteira",
    documento: "234.567.890-12", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "45678-901",
        endereco: "Av. N",
        numero: "1400",
        complemento: "Casa 4",
        bairro: "Centro",
        cidade: "Porto Seguro",
        estado: "BA"
      }
    ]
  },
  {
    nome: "Roberto Pereira",
    email: "roberto.pereira@example.com",
    descricao: "Engenheiro de Redes especializado em infraestrutura de data centers.",
    sexo: "Masculino",
    dataNascimento: new Date(1984, 4, 19),
    estadoCivil: "Casado",
    documento: "345.678.901-23", // CPF
    tipoPessoa: "Física",
    enderecos: [
      {
        cep: "56789-012",
        endereco: "Av. O",
        numero: "1500",
        complemento: "Apto 501",
        bairro: "Centro",
        cidade: "Fortaleza",
        estado: "CE"
      }
    ]
  }
];

export const CLIENTES = clientes;