# CarlosDev

Landing page / portfólio da marca CarlosDev: sites para comércios sem presença online.
React + Vite, CSS próprio, Framer Motion (animações leves) e Lucide (ícones).

## Rodar no seu computador

Requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## O que você precisa preencher

Tudo fica em `src/data/config.js` e `src/data/projects.js`. Campo vazio = item oculto.

- [ ] `whatsappNumber`: só números, com país e DDD (ex.: `5511999999999`). Enquanto estiver vazio, os botões rolam até a seção de contato.
- [ ] `githubUrl`, `instagramUrl`, `email`: opcionais.
- [ ] Texto da seção "Sobre" e a lista de tecnologias (`about`): confirme que só tem o que você domina.
- [ ] Projetos reais em `projects.js` (apague os 3 exemplos "demo").
- [ ] `testimonials`: só preencha com depoimentos reais (vazio = seção oculta).
- [ ] `guarantee`: só preencha se você realmente oferece (vazio = oculto).
- [ ] Perguntas sobre suporte e pagamento no `faq` (há exemplos comentados).
- [ ] Quando tiver domínio: canonical e `og:image` no `index.html` (comentário já deixado lá).

## Adicionar um projeto (seu site, link e foto)

1. Tire a captura de tela do site e salve em `public/images/projects/` (ideal: WebP, proporção 16:10, cerca de 1200x750).
2. Abra `src/data/projects.js` e adicione um bloco:

```js
{
  id: 'pizzaria-do-ze',
  title: 'Pizzaria do Zé',
  description: 'Site com cardápio, horários e pedido pelo WhatsApp.',
  image: '/images/projects/pizzaria-do-ze.webp',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  liveUrl: 'https://link-do-site-publicado.com',
  githubUrl: '', // opcional
},
```

3. Salve. O cartão aparece sozinho. Se a imagem não existir, aparece um visual de "Imagem em breve".

## Publicar de graça na Vercel (recomendado)

1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com, entre com o GitHub e clique em **Add New → Project**.
3. Escolha o repositório. A Vercel detecta Vite sozinha (Build: `npm run build`, Output: `dist`).
4. Clique em **Deploy**. Cada `git push` publica de novo automaticamente.

## Alternativa: GitHub Pages

1. Em `vite.config.js`, troque `base: '/'` por `base: '/NOME-DO-REPOSITORIO/'`.
2. No `index.html`, os caminhos `/favicon.svg` e as imagens em `projects.js` (`/images/...`) precisam incluir o mesmo prefixo, ou use caminhos relativos (`images/projects/x.webp`).
3. Rode `npm run build` e publique a pasta `dist/` (por exemplo com a ação `actions/deploy-pages` do GitHub, ou o pacote `gh-pages`).
4. No GitHub: **Settings → Pages** e selecione a fonte de publicação.

## Estrutura

```
carlosdev/
├── public/
│   ├── images/projects/     # capturas de tela dos sites
│   ├── images/profile/      # foto de perfil (opcional)
│   └── favicon.svg
├── src/
│   ├── components/          # Header, Hero, Pain, Benefits, Projects, ProjectCard,
│   │                        # Plans, Process, Testimonials, FAQ, About, Contact, Footer
│   ├── data/
│   │   ├── config.js        # contato, planos, sobre, FAQ, depoimentos
│   │   └── projects.js      # lista de projetos (edite aqui)
│   ├── styles/              # global.css e components.css
│   ├── utils/whatsapp.js    # monta o link do WhatsApp
│   ├── App.jsx
│   └── main.jsx
├── index.html               # título, descrição e metadados de compartilhamento
└── package.json
```

## Acessibilidade e performance

Menu móvel com teclado (Esc fecha), link "pular para o conteúdo", foco visível, HTML semântico,
textos alternativos nas imagens, `prefers-reduced-motion` respeitado, imagens com lazy loading
(as duas primeiras carregam direto) e links externos com `rel="noopener noreferrer"`.
