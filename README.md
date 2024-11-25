# NakaBI

NakaBI é um aplicativo desenvolvido em React Native com TypeScript, projetado para auxiliar na gestão de jogos do Banco Imobiliário. Ele utiliza o framework **Expo** para facilitar o desenvolvimento e execução do projeto.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (versão mais recente)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Passo a passo para rodar o projeto

## **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nakabi.git
cd nakabi
```

## Instale as dependências do projeto:
```bash
npm install
```

## Inicie o servidor do Expo:
```bash
expo start
```

## Abra o projeto no dispositivo ou emulador:

No navegador, será exibida a interface do Expo Go.
Use o aplicativo Expo Go em um dispositivo físico (iOS ou Android) para escanear o QR Code gerado e abrir o projeto.
Ou escolha a opção de rodar o projeto em um emulador de Android/iOS.

## ⚙️ Comandos úteis

Instalar dependências adicionais:
```bash
npm install <nome-da-dependencia>
```

Limpar o cache do Expo:
```bash
expo start -c
```

Ejetar o projeto (opcional):
```bash
expo eject
```

## 📱 Funcionalidades principais
Gerenciamento de jogadores, incluindo saldo e movimentações financeiras.
Simulação de lançamentos de dados.
Edição de dados dos jogadores.
Persistência de dados em arquivos JSON para partidas salvas.

## 🛠 Tecnologias utilizadas
React Native: Framework para desenvolvimento mobile.
Expo: Ferramenta para simplificar o processo de desenvolvimento e deploy.
TypeScript: Linguagem utilizada para maior segurança no código.
Expo FileSystem: Para leitura e gravação de arquivos locais.
