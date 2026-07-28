# GonTI — Site Institucional

Site institucional estático da GonTI, publicado em [gonti.com.br](https://gonti.com.br).
HTML5 + CSS3 + JavaScript vanilla — **zero dependências, zero build step, zero CDN de terceiros**
(exceto a fonte do Google Fonts). Sobe direto no GitHub Pages.

Posicionamento do site: especialização em **Blip** (chatbot e mensageria), **Genesys Cloud**
(chatbot, voicebot e URA) e **APIs backend em C#/.NET** para as integrações — com as
certificações correspondentes em destaque.

> Nota de copy: **as duas plataformas fazem chatbot.** O Blip é posicionado para
> atendimento que nasce em mensageria (WhatsApp e redes); o Genesys Cloud, como contact
> center completo que cobre texto *e* voz. Ao editar textos, não reduza o Genesys a
> "voz/URA".

## ✨ O que tem aqui

**Visual**
- Design system em CSS puro com `@layer`, custom properties e `color-mix()`
- Tema claro/escuro com persistência e sincronia automática com o sistema operacional
- Fundo animado (blobs em gradiente + grade com máscara radial)
- Glassmorphism no header, cards e painéis
- **Cubo 3D** em CSS puro (`preserve-3d`) na seção de plataformas, com rotação automática,
  controles por aba e painel de texto sincronizado
- **Inclinação 3D** com perspectiva nos cartões de certificação, seguindo o cursor
- Cards com _spotlight_ que acompanha o cursor
- Layout bento nos serviços, timeline no processo, marquee infinito na stack
- Demonstração de chatbot animada no hero e terminal simulado na seção "Sobre"
- Barra de progresso de leitura, scrollspy na navegação e botão "voltar ao topo"

**Engenharia**
- Ícones em sprite SVG inline — sem requisição externa, sem FOUC
- Tema aplicado antes da primeira pintura (script inline no `<head>`), sem flash
- `IntersectionObserver` para reveals, contadores e scrollspy; scroll com `requestAnimationFrame`
- Respeito total a `prefers-reduced-motion` e estilos de impressão
- Acessibilidade: skip link, landmarks, `aria-expanded`, `focus-visible`, contraste e navegação por teclado

**SEO**
- Open Graph + Twitter Card
- JSON-LD (`ProfessionalService`)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `canonical` e página `404.html`

## 🗂️ Estrutura

```
hugoxy.github.io/
├── index.html            # página única
├── 404.html              # página de erro do GitHub Pages
├── assets/
│   ├── css/styles.css    # design system completo
│   ├── js/main.js        # todas as interações
│   └── images/
│       ├── logo-mark.svg         # marca atual (monograma, usada no site)
│       ├── favicon.svg           # favicon vetorial
│       ├── GonTI_NoBG.png        # marca anterior — mantida p/ OG e apple-touch-icon
│       └── GonTI_NoBG_White.png  # marca anterior, versão clara
├── CNAME                 # domínio customizado
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── .nojekyll             # publica os arquivos como estão
└── LICENSE
```

## 🔧 Rodar localmente

Abrir o `index.html` no navegador já funciona. Para um ambiente mais fiel
(caminhos absolutos, `manifest`, clipboard API):

```bash
# Python 3
python -m http.server 8080

# ou Node
npx serve -l 8080 .
```

Depois acesse `http://localhost:8080`.

> A API de clipboard (botões "Copiar") exige contexto seguro — funciona em
> `localhost` e em HTTPS. Há fallback para `execCommand` nos demais casos.

## 🌐 Deploy

Qualquer push na branch `main` publica automaticamente.

- **Settings → Pages** → Source: `main` / `/ (root)`
- **Settings → Pages → Custom domain**: `gonti.com.br` (o arquivo `CNAME` já cuida disso)
- DNS: registro `CNAME` de `www` → `hugoxy.github.io` e registros `A` do apex para os IPs do GitHub Pages

## 🎨 Customização

| O que mudar | Onde |
| --- | --- |
| Cores, sombras, tipografia, raios | bloco `@layer tokens` em `assets/css/styles.css` |
| Textos, seções, FAQ, contatos | `index.html` |
| Ícones | sprite `<svg class="sprite">` no final do `index.html` (padrão Feather, 24×24) |
| Marca | `<symbol id="i-logo">` no mesmo sprite + `assets/images/favicon.svg` |
| Palavras rotativas do hero | array `words` em `assets/js/main.js` |
| Roteiro do chatbot | array `script` em `assets/js/main.js` |
| Faces do cubo 3D | `.cube__face` no `index.html` + painéis `.platform` correspondentes (mesma ordem) |
| Tecnologias da esteira | `.marquee__group` no `index.html` (**duplicar nos dois `<ul>`** — o loop depende disso) |

> ⚠️ O sprite de ícones é ocultado por `.sprite` (dimensão zero), **nunca** por
> `display:none` — com `display:none` o gradiente da marca deixa de resolver dentro
> dos elementos `<use>` e o logo renderiza sem preenchimento.

### Cubo 3D e painéis: mantenha a ordem

A face `data-face="N"` do cubo é sincronizada com o painel `data-panel="N"` e com o
botão `data-face-btn="N"`. Ao adicionar ou remover uma plataforma, ajuste os três
lugares e o `translateZ` das faces em `styles.css` (metade da largura do cubo).

### Sobre os números e as credenciais

- **Certificações** (Blip, Genesys Cloud Professional, C#) são informações reais fornecidas
  pela empresa. Não há ano nem ID de credencial no site — se quiser exibir, os cartões em
  `.certs` comportam bem uma linha a mais.
- **Disponibilidade (99,9%) e latência (<200 ms)** são apresentadas como *metas contratuais
  de engenharia*, não como histórico medido. A nota abaixo dos números diz isso
  explicitamente; se trocar por dados reais, ajuste a nota junto.

## 📄 Licença

MIT — veja [`LICENSE`](LICENSE).
