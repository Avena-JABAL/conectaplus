<div align="center">
  <img src="src/images/conecta-banner.svg" alt="Conecta+ — conexões que aproximam jovens de novas oportunidades" width="100%">

  <p>
    <a href="https://github.com/Avena-JABAL/conectaplus">
      <img src="https://img.shields.io/badge/GitHub-Reposit%C3%B3rio-101c62?style=for-the-badge&logo=github" alt="Repositório no GitHub">
    </a>
    <img src="https://img.shields.io/badge/Status-Em%20homologa%C3%A7%C3%A3o-5035f5?style=for-the-badge" alt="Projeto em homologação">
    <img src="https://img.shields.io/badge/Projeto-Acad%C3%AAmico-101c62?style=for-the-badge" alt="Projeto acadêmico">
  </p>
</div>

---

## Integrantes do projeto

| Nome | Matrícula |
| --- | --- |
| Alyson Coutinho dos Passos Silva | `01812644` |
| Arthur Fernandes do Nascimento Correia | `01848451` |
| Beatriz Jordão Albuquerque | `01812582` |
| Júlia Evelyn Santiago de Holanda | `01803734` |
| Lívia de Oliveira Moreno | `01800123` |


## Sobre o projeto

O **Conecta+** é uma proposta de plataforma digital que conecta jovens a oportunidades de trabalho, mentoria, capacitação e participação em projetos de impacto social.

O projeto busca fortalecer o protagonismo juvenil, ampliar a empregabilidade e incentivar o empreendedorismo, reunindo em um só lugar recursos para que cada jovem possa descobrir seus interesses e dar os próximos passos em sua trajetória.

## O problema

Muitos jovens encontram dificuldade para localizar oportunidades de emprego, estágio, voluntariado e formação. Essas informações costumam estar dispersas, enquanto o acesso a orientação profissional e a redes de apoio também pode ser limitado.

O Conecta+ propõe centralizar essas oportunidades e aproximar jovens de pessoas, iniciativas e conteúdos que apoiem seu desenvolvimento pessoal e profissional.

## O objetivo

Desenvolver uma plataforma digital que facilite o acesso dos jovens a oportunidades profissionais, educacionais e sociais, incentivando a aprendizagem, o desenvolvimento de habilidades e o empreendedorismo.

## A proposta

Criar um espaço acessível e acolhedor em que jovens possam apresentar seus interesses e habilidades, encontrar oportunidades locais, aprender, receber orientação e compartilhar iniciativas com a comunidade.

## Funcionalidades da versão candidata

- Cadastro, login, recuperação de senha e logout simulados, com rotas protegidas.
- Seis trilhas de aprendizagem com busca e conclusão de módulos.
- Oportunidades fictícias com pesquisa, filtro por tipo e marcação de interesse.
- Meu Espaço: acompanhamento do progresso e das oportunidades salvas.
- Perfil editável com formação, interesses e habilidades.
- Navegação adaptada para telas menores.

**Limites:** protótipo acadêmico front-end, sem servidor de autenticação ou banco de dados. Use apenas dados fictícios. Cadastro, sessão, perfil e progresso ficam na memória durante a execução e são perdidos ao recarregar a página. A recuperação não envia e-mails; certificados, fórum e mentoria real não fazem parte desta versão.

## Tecnologias

React, React Router, Context API, JavaScript, Vite, Tailwind CSS, CSS e Oxlint.

## Instalação e execução

Requisitos: Node.js 22.12+ (linha 22 ou superior compatível) e npm.

```bash
git clone https://github.com/Avena-JABAL/conectaplus.git
cd conectaplus
npm ci
npm run dev
```

Abra a URL local informada pelo Vite (normalmente http://localhost:5173).

### Verificação e build

```bash
npm test
npm run lint
npm run build
npm run preview
```

O build gera a pasta `dist/`. O comando preview permite verificar o build localmente.

## Rotas

| Rota | Acesso |
| --- | --- |
| / | Público |
| /cadastro, /login, /recuperar-senha, /logoff | Público |
| /trilhas, /trilhas/:id | Autenticado |
| /oportunidades, /meu-espaco, /perfil | Autenticado |

## Deploy

O arquivo `vercel.json` configura o projeto Vite, o build, a pasta de saída e o redirecionamento de rotas da SPA. Importe o repositório na Vercel e utilize a branch main após aprovação. O endereço público será incluído aqui depois de confirmado o deploy.

## Capturas de tela

Pendentes de execução em navegador. Registrar imagens reais da landing page, autenticação, trilhas, Meu Espaço, oportunidades e perfil, usando dados fictícios; incluir também uma captura móvel. Não utilizar mockups como evidência de execução.

## Homologação e apresentação

Veja [roteiro de testes e apresentação](docs/homologacao.md). Os testes automatizados cobrem isolamento dos dados por conta e consistência das trilhas; os fluxos completos precisam de validação em navegador antes da publicação da tag v1.0.0.

## Repositório

[Acesse o Conecta+ no GitHub](https://github.com/Avena-JABAL/conectaplus).
