# GonTI — Site Institucional

Site institucional estático da GonTI (Gontijo Tecnologia da Informação), moderno, responsivo e otimizado para GitHub Pages. Construído com HTML5, CSS3 e JavaScript vanilla (sem build).

## 🚀 Destaques

- **Design system** com variáveis CSS, grid/flex, glassmorphism e gradientes
- **Responsivo** para desktop, tablet e mobile
- **Tema claro/escuro** com persistência
- **SEO e performance**: HTML semântico, fontes otimizadas, lazy loading, JS leve
- **Acessibilidade**: contraste, navegação consistente, âncoras e landmarks

## 🗂️ Estrutura

```
hugoxy.github.io/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── GonTI_NoBG.png
│       └── GonTI_NoBG_White.png
├── CNAME
├── LICENSE
└── README.md
```

## 🔧 Executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/hugoxy/hugoxy.github.io.git
cd hugoxy.github.io
```
2. Abra `index.html` diretamente no navegador ou use um servidor local simples:
```bash
# Python 3
python -m http.server 8080
# ou Node
npx serve -l 8080 .
```
3. Acesse `http://localhost:8080`.

## 🌐 Deploy no GitHub Pages

Este repositório já está no formato suportado pelo GitHub Pages (root do repositório).

- Commits na branch `main` são publicados automaticamente.
- O arquivo `CNAME` aponta o domínio para `gonti.com.br`.

Passos para configurar do zero (se necessário):
- Vá em Settings → Pages → Branch: `main` / `/root` → Save
- Em Settings → Pages → Custom domain: `gonti.com.br` (verifique DNS com um registro CNAME apontando para `hugoxy.github.io`)

## 🧩 Customização rápida

- Paleta de cores: edite os tokens em `:root` e `[data-theme="dark"]` em `assets/css/styles.css`.
- Seções/Conteúdo: edite o HTML semântico em `index.html`.
- Interações: ajuste handlers em `assets/js/main.js` (menu, tema, animações).

## 📄 Licença

MIT — veja [`LICENSE`](LICENSE).

---
Desenvolvido com ❤️ por GonTI