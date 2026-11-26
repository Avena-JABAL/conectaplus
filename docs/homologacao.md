# Homologação da versão 1.0.0

Use dados fictícios e registre o resultado real (aprovado, falhou ou não executado), navegador e commit. A tabela abaixo é um plano, não um relatório de testes executados.

| Fluxo | Procedimento e resultado esperado |
| --- | --- |
| Cadastro | Testar campos vazios, e-mail inválido, senhas divergentes, senha curta e e-mail duplicado; cadastro válido abre login. |
| Login | Senha incorreta exibe erro; credenciais válidas abrem trilhas ou destino solicitado. |
| Rotas | Sem sessão, abrir /perfil, /meu-espaco, /oportunidades, /trilhas/programacao; devem redirecionar ao login. |
| Recuperação | E-mail inválido bloqueado; e-mail válido confirma simulação sem enviar mensagem. |
| Trilhas | Buscar programação, abrir card, marcar/desmarcar módulo; progresso deve atualizar em Meu Espaço. Testar ID inexistente. |
| Oportunidades | Buscar, filtrar, testar resultado vazio, marcar e desmarcar interesse; conferir Meu Espaço. |
| Perfil | Editar nome, formação, interesses e habilidades; salvar e verificar após logout e novo login sem recarregar. |
| Isolamento | Criar duas contas fictícias na mesma aba; confirmar que progresso e favoritos da conta A não aparecem na B e retornam ao entrar na A. |
| Navegação | Acessar todos os itens do menu, voltar ao início e retornar às trilhas sem perder a sessão. |
| Logout | Sair e tentar abrir uma rota protegida; deve voltar ao login. |
| Responsividade | Em 360, 390, 768, 1024 e 1440 px, verificar navegação visível, formulários utilizáveis e ausência de rolagem horizontal indevida. |
| Deploy | Abrir URL pública e acessar diretamente /perfil e /trilhas/programacao; SPA deve carregar e redirecionar ao login. |

## Roteiro de apresentação (10 minutos)

| Tempo | Demonstração |
| --- | --- |
| 0–1 min | Problema e proposta do Conecta+. |
| 1–2 min | React, Vite, React Router, Context API e limites do protótipo. |
| 2–4 min | Cadastro com validações, login e acesso protegido. |
| 4–6 min | Busca de trilhas, conclusão de módulos e progresso em Meu Espaço. |
| 6–8 min | Filtro de oportunidades, interesse salvo e edição do perfil. |
| 8–9 min | GitHub: commits, branches, PRs e reviews realmente registradas. |
| 9–10 min | Interface móvel, logout, link de deploy e release (quando publicados). |

## Antes da entrega

- [ ] Reviews dos demais integrantes registradas por eles.
- [ ] Testes automatizados, lint, build e fluxos em navegador aprovados.
- [ ] Capturas reais adicionadas a docs/screenshots e referenciadas no README.
- [ ] Deploy público validado e endereço incluído no README.
- [ ] Após aprovação e merge, publicar tag/release v1.0.0 no commit validado.
