# 🙏 Maria, Mãe de Deus - Landing Page

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=flat&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white)

Uma landing page dedicada à devoção mariana, oferecendo orações, reflexões e contato direto via WhatsApp com integração inteligente para pesquisas sobre orações católicas.

[Demo ao Vivo](https://seu-usuario.github.io/maria) • [Reportar Bug](../../issues) • [Solicitar Feature](../../issues)

</div>

## 🙏 Sobre o Projeto

Esta é uma landing page moderna e responsiva criada para promover a devoção à Nossa Senhora, desenvolvida com foco na experiência do usuário e acessibilidade. O projeto combina design elegante com funcionalidades práticas para facilitar a vida espiritual dos fiéis.

### 🎯 Objetivo

Oferecer uma plataforma digital acessível e inspiradora que conecte os devotos com:
- **Orações Tradicionais**: Ave Maria, Salve Rainha e Memorare
- **Reflexões Espirituais**: Meditações sobre a vida e virtudes de Maria
- **Comunicação Direta**: Contato via WhatsApp para intenções e testemunhos
- **Tecnologia Inteligente**: Integração com IA para pesquisas sobre orações católicas

---

### 📱 Seções da Página

1. **🏠 Header/Navegação**: Menu fixo com scroll suave e logo personalizado
2. **🌟 Hero Section**: Apresentação principal com call-to-actions destacados
3. **📋 Sobre**: Informações sobre Maria e sua importância na fé católica
4. **🙏 Orações**: Cards interativos com as principais orações marianas
5. **💭 Reflexões**: Sistema rotativo de meditações espirituais
6. **📞 Contato**: Integração WhatsApp e informações de contato
7. **📚 Footer**: Links úteis e orações populares com IA

---

## 🚀 Tecnologias Utilizadas

### Frontend Core
- **HTML5**: Estrutura semântica e acessível com meta tags otimizadas
- **CSS3**: Design moderno com recursos avançados
  - Variáveis CSS customizadas (`:root`)
  - CSS Grid e Flexbox layouts
  - Animações e transições suaves
  - Design responsivo (mobile-first)
  - Media queries otimizadas
- **JavaScript ES6+**: Funcionalidades interativas
  - Manipulação moderna do DOM
  - Event listeners eficientes
  - Intersection Observer API
  - Módulos ES6 (futuro)

### Bibliotecas e Recursos
- **[Font Awesome 6.0](https://fontawesome.com/)**: Ícones vetoriais modernos
- **[Google Fonts](https://fonts.google.com/)**: Tipografia premium
  - `Crimson Text`: Fonte serifada para títulos
  - `Open Sans`: Fonte sans-serif para textos

### Integrações
- **WhatsApp Business API**: Comunicação direta
- **ChatGPT Integration**: Pesquisas inteligentes sobre orações

---

## 🛠️ Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### 📥 Clone o Repositório

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/nossa-senhora.git

# Entre no diretório do projeto
cd nossa-senhora
```

#### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### 🔗 Acessar a Aplicação

Abra seu navegador e acesse: `http://localhost:8000`

---

## 📚 Como Usar

### 🧭 Navegação
- Use o menu superior para navegar entre as seções
- No mobile, clique no ícone hamburger (☰) para abrir o menu

### 🙏 Visualizar Orações
1. Vá até a seção "Orações"
2. Clique em qualquer card de oração
3. O modal será aberto com o texto completo
4. Clique no "X" ou fora do modal para fechar

### 💭 Reflexões Automáticas
- As reflexões mudam automaticamente a cada 10 segundos
- Use os botões "←" e "→" para navegar manualmente
- Pause o auto-play clicando em qualquer botão de navegação

### 📱 Contato via WhatsApp
1. Role até a seção "Contato"
2. Clique no botão "Enviar Intenção de Oração" ou "Compartilhar Testemunho"
3. Será redirecionado para o WhatsApp com mensagem pré-definida

### 🤖 Pesquisa com IA
- No footer, clique em qualquer oração listada
- Será redirecionado para o ChatGPT com prompt personalizado

---

## 📁 Estrutura do Projeto

```
nossa-senhora/
│
├── 📄 index.html          # Página principal
├── 🎨 styles.css          # Estilos CSS
├── ⚙️ script.js           # Lógica JavaScript
└── 📖 README.md           # Documentação
```

---

## 🎨 Customização

### 🎨 Cores (CSS Variables)

```css
:root {
    --primary-color: #1B4B7A;    /* Azul principal */
    --secondary-color: #E8B86B;  /* Dourado */
    --accent-color: #8B5D8B;     /* Roxo suave */
    --gold: #D4AF37;             /* Dourado destacado */
}
```

### 🔤 Tipografia

```css
:root {
    --font-primary: 'Crimson Text', serif;    /* Títulos */
    --font-secondary: 'Open Sans', sans-serif; /* Textos */
}
```

### 📱 Responsividade

O projeto utiliza breakpoints otimizados:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Veja como você pode ajudar:

### 🐛 Reportar Bugs
1. Verifique se o bug já foi reportado nas [Issues](../../issues)
2. Crie uma nova issue com template de bug report
3. Inclua screenshots e informações do ambiente

### 💡 Sugerir Features
1. Verifique se a feature já foi sugerida
2. Crie uma nova issue com template de feature request
3. Descreva detalhadamente o caso de uso

### 🔧 Contribuir com Código

```bash
# 1. Faça um fork do projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/AmazingFeature

# 3. Commit suas mudanças
git commit -m 'Add some AmazingFeature'

# 4. Push para a branch
git push origin feature/AmazingFeature

# 5. Abra um Pull Request
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Feito com 💙 e muita ✨ fé**

*"Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra."* - Lucas 1:38

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>