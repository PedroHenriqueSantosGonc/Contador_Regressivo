# ⏳ Contador Regressivo

Aplicação web que permite criar **contagens regressivas personalizadas** para qualquer evento (Ano Novo, aniversário, lançamento, viagem, etc.). O usuário define um título, a data do evento, uma imagem de fundo e uma cor de tema, e a aplicação exibe em tempo real quantos dias, horas, minutos e segundos faltam.

## ✨ Funcionalidades

- 📝 Criação de evento personalizado através de um formulário (título, data, imagem e cor do tema)
- ⏱️ Contagem regressiva em tempo real (dias, horas, minutos e segundos), atualizada a cada segundo
- 🎨 Tema visual dinâmico: a cor escolhida é aplicada aos números e textos do contador
- 🖼️ Imagem de fundo customizável (ou uma imagem padrão de Ano Novo, caso nenhuma seja informada)
- 🧭 Navegação entre telas com React Router (tela de criação → tela do contador)
- 🔄 Estado do evento compartilhado entre as rotas via Context API

## 🚀 Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build tool e servidor de desenvolvimento
- [React Router DOM](https://reactrouter.com/) — roteamento entre páginas
- Context API — gerenciamento de estado global do evento
- Hook customizado (`useCountdown`) — cálculo do tempo restante
- CSS puro para estilização
- ESLint — padronização e qualidade do código

## 📁 Estrutura do projeto

```
contador/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── newyear.jpg
│   ├── components/
│   │   ├── Counter.jsx      # Card individual (dias/horas/min/seg)
│   │   └── Title.jsx        # Título do evento
│   ├── context/
│   │   └── CountdownContext.jsx  # Contexto global do evento
│   ├── hooks/
│   │   └── useCountdown.jsx      # Hook que calcula o tempo restante
│   ├── routes/
│   │   ├── Home.jsx         # Formulário de criação do evento
│   │   └── Countdown.jsx    # Tela da contagem regressiva
│   ├── App.jsx               # Layout principal + roteamento
│   └── main.jsx               # Ponto de entrada da aplicação
├── package.json
└── vite.config.js
```

## 🛠️ Como executar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/PedroHenriqueSantosGonc/Contador_Regressivo.git

# Acesse a pasta do projeto
cd Contador_Regressivo/contador

# Instale as dependências
npm install

# Rode o projeto em modo de desenvolvimento
npm run dev
```

O projeto ficará disponível em `http://localhost:5173` (porta padrão do Vite).

### Outros scripts disponíveis

| Comando           | Descrição                                   |
|--------------------|---------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento         |
| `npm run build`    | Gera a versão de produção (pasta `dist`)     |
| `npm run preview`  | Pré-visualiza o build de produção            |
| `npm run lint`     | Executa o ESLint para checar o código        |

## 🖥️ Como usar

1. Na tela inicial, preencha o **título** do evento, a **data**, opcionalmente uma **URL de imagem** de fundo e escolha a **cor do tema**.
2. Clique em **Enviar**.
3. Você será redirecionado para a tela de contagem regressiva, que atualiza automaticamente dias, horas, minutos e segundos até a data escolhida.

## 📌 Possíveis melhorias futuras

- Validação e feedback visual para datas já passadas
- Upload de imagem em vez de apenas URL
- Persistência do evento (localStorage) para não perder o contador ao atualizar a página
- Suporte a múltiplos contadores salvos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido por **Pedro Henrique**
[GitHub](https://github.com/PedroHenriqueSantosGonc)
