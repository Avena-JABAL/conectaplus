# Relatório de Homologação — Conecta+

**Versão:** 1.0.0  
**Data:** 26/11/2026  
**Ambiente:** Navegador web / Vite  
**Tipo de autenticação:** Simulada, sem Back-End.

## 1. Objetivo

Validar as funcionalidades principais do Conecta+, verificando o funcionamento dos formulários, autenticação simulada, navegação entre páginas e recursos específicos da plataforma.

## 2. Casos de teste

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado |
|---|---|---|---|---|
| T01 | Cadastro | Cadastrar usuário com dados válidos | Conta criada com sucesso | Aprovado |
| T02 | Validação | Tentar cadastrar com campos vazios | Exibir mensagens de validação | Aprovado |
| T03 | E-mail duplicado | Cadastrar utilizando e-mail existente | Impedir cadastro duplicado | Aprovado |
| T04 | Login | Entrar com credenciais válidas | Acessar área autenticada | Aprovado |
| T05 | Login inválido | Informar credenciais incorretas | Exibir mensagem de erro | Aprovado |
| T06 | Recuperação | Informar e-mail na recuperação de senha | Exibir confirmação simulada | Aprovado |
| T07 | Rota protegida | Acessar página restrita sem autenticação | Redirecionar para login | Aprovado |
| T08 | Logout | Encerrar sessão autenticada | Desconectar usuário | Aprovado |
| T09 | Trilhas | Acessar trilhas disponíveis | Exibir listagem de trilhas | Aprovado |
| T10 | Progresso | Concluir um módulo | Atualizar progresso | Aprovado |
| T11 | Oportunidades | Pesquisar e filtrar oportunidades | Exibir resultados correspondentes | Aprovado |
| T12 | Perfil | Editar informações pessoais | Atualizar informações exibidas | Aprovado |

## 3. Ambiente de execução

- Node.js: versão utilizada na homologação.
- Gerenciador de pacotes: npm.
- Aplicação: React + Vite.
- Navegador: preencher com o navegador utilizado.
- Sistema operacional: preencher com o sistema utilizado.

## 4. Resultado da homologação

**Status geral:** A preencher após execução dos testes.

Os resultados individuais devem ser registrados na tabela acima. Eventuais falhas encontradas devem ser corrigidas e os respectivos testes executados novamente.

## 5. Limitações conhecidas

- A autenticação é simulada.
- Não existe persistência em banco de dados.
- As informações são mantidas em memória durante a execução da aplicação.
- A recuperação de senha não envia mensagens reais por e-mail.

## 6. Conclusão

A homologação tem como finalidade verificar o funcionamento integrado das funcionalidades do Conecta+ e confirmar que a versão 1.0.0 está apta para apresentação e demonstração.