# Anotações Feitas durante o curso intensivo.

# Aspectos abordados:

# Next

- **Pasta `app`**: No Next, a pasta `app` é o local onde você pode gerenciar todas as rotas de páginas e API.
- **Pasta `pages`**: Cada arquivo dentro da pasta `pages` representa uma rota no sistema de roteamento do Next.
- **Pastas Privadas**: Prefixando uma pasta com um sublinhado (por exemplo, `_components`), indicando que essa pasta não deve ser tratada como uma rota pelo Next.
- **Pasta `public`**: Serve para armazenar ativos estáticos que precisam ser acessíveis publicamente, como imagens, arquivos de estilo e scripts.
- **Colocação Segura por Padrão**: No diretório `app`, a colocação de arquivos é segura por padrão, o que significa que você pode ter arquivos que não são rotas ao lado dos arquivos de rota sem que eles se tornem acessíveis publicamente.

# React

- **Componentização**: No React, a aplicação é dividida em componentes reutilizáveis, que podem ter seus próprios estados e lógica.
- **Props**: Os dados são passados entre componentes através de props, permitindo a comunicação e reutilização de componentes.
- **Estado `State`**: Os estados são usados para gerenciar dados dentro de um componente e renderizá-lo novamente quando esses dados mudam.
- **Hooks**: Os hooks são funções que permitem que você use o estado e outros recursos do React sem escrever uma classe.
- **JSX/TSX**: React usa JSX/TSX um pseudo-html dentro de um retorno de função javascript/typescript.

# React + Next

- **Componentes React no Next**: no Next, os componentes React são usados para criar a UI das páginas e também podem ser organizados em pastas privadas para não serem tratados como rotas.
- **Estilos Globais**: Estilos globais são aplicados através da pasta `styles` ou diretamente nos componentes usando CSS-in-JS ou outras abordagens de estilização.
- **Otimização de Desempenho**: Next otimiza automaticamente o desempenho do aplicativo tanto no servidor quanto no lado do cliente, incluindo a otimização de imagens e a divisão de código automáticas.

# TailwindCSS

- **Biblioteca de estilos**: É uma biblioteca/framework de estilos que é usada para estilizar componentes.
- **Usado dentro de tags HTML**: Usa classes dentro de tags "html" para estilizar os componentes.
- **Menos código**: Tem classes significativamente menores do que o css puro.
- **Classes Utilitárias**: Fornece classes utilitárias que podem ser aplicadas diretamente nas tags HTML para estilizar os componentes.
- **Estilização Responsiva**: Facilita a criação de designs responsivos com classes que se adaptam a diferentes tamanhos de tela.
- **Customização**: Permite a customização de temas e estilos diretamente no arquivo de configuração do TailwindCSS.
- **Design Único**: Permite criar designs únicos sem se limitar a componentes pré-desenhados, como acontece em muitos outros frameworks CSS. Isso oferece ao desenvolvedor a liberdade de construir interfaces personalizadas sem a necessidade de sobrescrever estilos.
- **Eliminação de Código Morto**: Uma característica importante é a eliminação automática de estilos não utilizados (também conhecida como "purge"), o que ajuda a reduzir o tamanho do arquivo CSS final, otimizando o desempenho do carregamento da página.


------------------------------------------
Rode a aplicação com os comandos abaixo

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

