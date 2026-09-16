# Superintendente Passiani - Portfólio Imobiliário 🏢

Um site profissional, responsivo e moderno desenvolvido para apresentar o portfólio de empreendimentos imobiliários do **Superintendente Passiani** (parceria Econ). 

O objetivo do projeto é facilitar a captação de clientes, fornecer informações detalhadas sobre os imóveis e disponibilizar materiais de vendas (como books, tabelas e fichas técnicas) de forma centralizada, elegante e acessível em qualquer dispositivo.

---

## ✨ Funcionalidades Principais

* **Vitrine de Projetos Inteligente**: Sistema de busca e filtragem dinâmica (por região e nome do projeto) construído com JavaScript puro, permitindo que os clientes encontrem rapidamente o que procuram.
* **Páginas Detalhadas por Empreendimento**:
  * Free Liberdade
  * Verdí Tiquatira
  * Bio Parque Nabuco
  * Class Prime
  * Class Select
* **Tabelas de Tipologia**: Exibição clara de todas as plantas disponíveis, com informações de Metragem, Valores Mínimos, Valores de Avaliação, Categorias (HIS1, HIS2, HMP, R2V) e Vagas.
* **Acesso a Documentos**: Botões dedicados para visualização rápida de materiais de vendas (Tabelas, Books, Ficha Técnica e Implantação). Os documentos abrem automaticamente em uma nova aba do navegador.
* **Galerias de Imagens Interativas**: Visualização imersiva de fachadas, áreas comuns, decorados e plantas.
* **Totalmente Responsivo**: Experiência de navegação otimizada tanto para computadores quanto para smartphones (Mobile First).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estruturação semântica e acessível.
* **CSS3**: Estilização moderna com Flexbox, CSS Grid e media queries para responsividade.
* **JavaScript (Vanilla)**: Lógica de filtros, interações e manipulação do DOM sem dependência de frameworks pesados.
* **[Swiper.js](https://swiperjs.com/)**: Biblioteca utilizada para a criação dos carrosséis de imagens (galerias).
* **[GLightbox](https://biati-digital.github.io/glightbox/)**: Plugin utilizado para expansão em tela cheia das imagens ao serem clicadas.
* **Google Fonts**: Tipografia elegante utilizando `Playfair Display` (títulos) e `Inter` (textos gerais).

---

## 📂 Estrutura do Projeto

```text
gerente-passiani/
├── index.html                 # Página inicial (Hero, Sobre, Destaques, Contato)
├── projetos.html              # Catálogo completo com sistema de filtros
├── projetos/                  # Páginas individuais de cada empreendimento
│   ├── bioParqueNabuco.html
│   ├── classPrime.html
│   ├── classSelect.html
│   ├── freeLiberdade.html
│   └── verdiTiquatira.html
├── css/
│   └── style.css              # Estilização global de todas as páginas
├── js/
│   └── script.js              # Scripts globais
├── assets/
│   └── img/                   # Imagens gerais, logos e fotos dos projetos
└── docs/                      # Arquivos PDF (Tabelas, Books, Fichas Técnicas)
```

---

## 🚀 Como Executar o Projeto

Por se tratar de um projeto puramente estático (Front-end Vanilla), a execução é extremamente simples e não requer configurações de servidor complexas.

1. Faça o clone ou o download deste repositório para a sua máquina.
2. Navegue até a pasta raiz do projeto (`gerente-passiani`).
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador padrão.
   * _(Opcional)_: Para uma melhor experiência de desenvolvimento, abra a pasta no VSCode e utilize a extensão **Live Server**.
