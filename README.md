# Estágio Hub - HubCount BI

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de estágio na HubCount. Consiste em um **Dashboard Admin** construído com **HTML**, **CSS** e **JavaScript**, por enquanto sem frameworks externos, que demonstra habilidades de front-end, manipulação de DOM e lógica básica, próximo passo é implementar React.js.

##  Funcionalidades

1. **Boas-vindas Personalizada**
   - Solicita o nome do usuário via `prompt()` e atualiza a mensagem de boas-vindas.

2. **Contagem de Módulos**
   - Conta automaticamente a quantidade de módulos nas seções **Automação** e **Relatórios**.
   - Exibe a contagem logo abaixo de cada grid.

3. **Interatividade nos Módulos**
   - Cada cartão possui um ícone de ajuda que, ao ser clicado, exibe um `alert()` com a descrição do módulo.
   - Descrições customizadas para cada módulo, usando atributos `data-modulo`.

4. **Destaque de Módulos em Manutenção**
   - Lista de módulos em manutenção que recebem estilo diferenciado.
   - Permite identificar visualmente módulos temporariamente indisponíveis.

5. **Filtro de Módulos Ativos**
   - Checkbox para "Mostrar apenas módulos ativos" que oculta automaticamente os módulos em manutenção.

6. **Comparativo JavaScript vs. TypeScript**
   - Arquivo `comparativo.txt` explicando as principais diferenças entre as linguagens e justificando o uso de TypeScript em projetos maiores.

##  Estrutura de Arquivos

├── index.html # Marcações HTML da interface
├── style.css # Estilos CSS organizados e comentados
├── script.js # Lógica de interatividade em JavaScript puro
├── comparativo.txt # Comparativo entre JavaScript e TypeScript
└── imagens/ # Ícones e assets utilizados nos cartões



##  Tecnologias Utilizadas

- **HTML5**
- **CSS (Grid & Flexbox)**
- **JavaScript **

 Objetivo do Projeto
Demonstrar a aplicação de conceitos fundamentais de JavaScript e front-end:

Manipulação de DOM

Trabalhar com eventos e listeners

Estruturas condicionais e de repetição

Princípios de responsividade e organização de código
