# CodeLabAPITemplate

Esse é um template para criação de um API do CodeLab. Utilize este template para criar sua API NestJS dentro de um Docker Container.

⚠️ Antes de iniciar o projeto a partir do templante, verifique os TODO's e substitua pelos valores corretos ⚠️

## Development Start

```bash
docker compose up --build
```

## Execução de testes

- Atenção: "attach" ao container para executar os testes.
- Caso não deseje obter os relatórios de cobertura, remova o sufixo `:cov` dos comandos abaixo.

### Unit

```bash
npm run test:cov
```

### E2E

```bash
npm run test:e2e:cov
```
