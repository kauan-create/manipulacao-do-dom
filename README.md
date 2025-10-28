# ONG Transformar — Website Institucional

Este repositório contém o site institucional da ONG Transformar. O objetivo desta entrega é demonstrar práticas profissionais de versionamento, acessibilidade (WCAG 2.1 AA), otimização para produção e documentação técnica completa.

## Entregáveis desta atualização

1. Repositório GitHub com histórico organizado (GitFlow, commits semânticos, releases).
2. Implementação de acessibilidade (skip-link, ARIA, navegação por teclado, contraste mínimo 4.5:1).
3. Temas acessíveis: modo claro, modo escuro e alto contraste.
4. Scripts de build para minificação de HTML/CSS/JS e instruções para compressão de imagens.
5. README profissional com instruções de uso, fluxo de versionamento e checklist de entrega.

---

## Estrutura do projeto (resumida)

```
index.html
projetos.html
cadastro.html
styles/
    ├─ variables.css
    ├─ themes.css
    ├─ components.css
    ├─ layout.css
    └─ main.css
script.js
images/
README.md
package.json
```

## Como validar localmente

1. Clone o repositório e abra `index.html` em um navegador.

2. Recomendo usar um servidor local simples (opcional):
```powershell
# Windows PowerShell
python -m http.server 8080
# Depois abra http://localhost:8080
```

3. Testes rápidos de acessibilidade:
- Verifique se o link "Pular para o conteúdo" aparece ao pressionar Tab na página inicial.
- Navegue pelo menu usando Tab / Enter / ArrowDown e verifique se o submenu abre e fecha corretamente.
- Ative o modo de alto contraste através do seletor de tema e cheque contraste entre texto e fundo (acima de 4.5:1 para texto normal).

## Git / GitHub — Estratégia exigida

Estratégia: GitFlow (adote as branches abaixo)

- `main` — código pronto para produção (releases).
- `develop` — integração contínua de features.
- `feature/<nome>` — desenvolvimento de novas funcionalidades.
- `release/<versao>` — preparação de release, ajustes e correções.
- `hotfix/<nome>` — correção crítica direto da `main`.

Recomendações de workflow:
- Crie uma issue relacionada e um branch `feature/ISSUE-<id>-descrição`.
- Trabalhe e faça commits semânticos (conventional commits):
    - Ex.: `feat(nav): add keyboard support for dropdown`
    - Ex.: `fix(form): validate email input`
    - Ex.: `chore(release): 1.2.0`
- Abra um Pull Request para `develop` descrevendo mudanças e linkando issues.
- Ao finalizar, crie uma `release/x.y.z` e faça merge para `main` seguindo versionamento semântico.

## Versionamento Semântico (releases)

- Follow semver: MAJOR.MINOR.PATCH
- Use releases no GitHub com changelog mínimo (features, fixes, breaking changes).

## Build / Otimização para Produção

Adicionei um `package.json` com scripts sugeridos para minificação. Instale as dependências dev localmente:

```powershell
npm install
npm run build
```

Scripts principais (descrição):
- `build:css` — minifica CSS em `dist/styles.min.css`.
- `build:js` — minifica JS em `dist/script.min.js`.
- `build:html` — minifica HTML nas páginas (gera em `dist/`).
- `build:images` — instruções para compressão (imagem otimizada manualmente ou com imagemin).
- `build` — executa todos os passos acima.

Observação: estas ferramentas são chamadas via CLI (ex.: `clean-css-cli`, `terser`, `html-minifier-terser`). Caso prefira, use um bundler (Parcel / Vite) para processos mais avançados.

## Acessibilidade (WCAG 2.1 — Nível AA)

Principais melhorias implementadas nesta entrega:

- Skip-link (link no topo que pula direto para o conteúdo principal).
- Marcos semânticos (`role="banner"`, `role="navigation"`, `main#main-content`).
- Navegação por teclado no menu: Enter/Space abre/fecha, ArrowDown foca itens, Esc fecha.
- Atributos ARIA em menus e itens (`aria-expanded`, `aria-haspopup`, `role="menu"`, `role="menuitem"`).
- Foco visível para elementos interativos (`:focus-visible`).
- Temas: claro, escuro e alto contraste (variáveis CSS e aplicações via `data-theme`).
- Formulários com labels e placeholders, máscaras de CPF/telefone e estados requeridos (`required`).

Checklist de conformidade (autoverificação):
- [x] Skip-link funcional e visível ao focar
- [x] Estrutura semântica com landmarks
- [x] Navegação por teclado para menus e formulários
- [x] Contraste mínimo 4.5:1 (cores primárias e secundárias revisadas)
- [x] Textos alternativos em imagens de conteúdo (alt)

## Histórico de commits sugerido (convencional)

Exemplos:
- `feat(header): add skip link and aria attributes`
- `fix(nav): keyboard navigation for dropdown`
- `chore(styles): improve focus-visible styles`
- `build(ci): add build pipeline`

## Checklist de Entrega (para professor/a)

1. Repositório com histórico de commits organizados (GitFlow).
2. Pull Requests com descrição e referências a issues.
3. README com instruções de uso, build e checklist de acessibilidade.
4. Páginas revisadas com skip-link, ARIA, navegação por teclado e temas acessíveis.
5. Scripts de build para minificação (documentados).

---

Se quiser, posso também:
- adicionar um workflow do GitHub Actions para rodar a pipeline de build e publicar em GitHub Pages;
- criar um script de testes automatizados (axe-core) para checar acessibilidade automaticamente.

Informe qual próximo passo prefere que eu execute.

