- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements
  Projeto definido como blog em Next.js com TypeScript, App Router, dados em JSON local, rotas dinâmicas e SEO dinâmico.
- [x] Scaffold the Project
  Scaffold realizado manualmente no diretório atual porque o create-next-app bloqueou o nome da pasta aberta para package name do npm.
- [x] Customize the Project
  Home em app/page.tsx, rota dinâmica em app/artigos/[slug]/page.tsx, dados em data/artigos.json, helper server-side em lib/articles.ts e SEO por generateMetadata.
- [x] Install Required Extensions
  Nenhuma extensão adicional foi exigida pelo setup do projeto.
- [x] Compile the Project
  npm install, npm run lint e npm run build executados com sucesso.
- [x] Create and Run Task
  Task criada em .vscode/tasks.json para subir o servidor de desenvolvimento.
- [x] Launch the Project
  Aplicação validada localmente com npm run dev usando Webpack por compatibilidade de CPU neste ambiente.
- [x] Ensure Documentation is Complete
  README.md atualizado com visão geral, scripts e instruções de execução e deploy.

- Observação de ambiente
  Neste workspace, o modo padrão do next dev com Turbopack falhou por ausência de suporte a BMI2 na CPU. O script dev foi ajustado para next dev --webpack.

- Observação de deploy
  O deploy público na Vercel depende de autenticação em conta Vercel neste ambiente. A aplicação está pronta para deploy, mas a publicação não pode ser concluída sem login ou token.