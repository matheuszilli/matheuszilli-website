# Portfolio - Matheus Zilli

Um site pessoal clean e minimalista desenvolvido em React com TypeScript, apresentando meu trabalho como estudante de Engenharia de Software.

## 🚀 Tecnologias

- **React 19** com **TypeScript** para tipagem estática
- **Vite** para build rápido e desenvolvimento
- **Tailwind CSS** para estilização
- **React Icons** para ícones
- **Google Fonts (Inter)** para tipografia

## 🎨 Design

- **Estilo**: Minimalista e clean
- **Paleta de cores**:
  - Primary: `#111827` (preto suave)
  - Secondary: `#6b7280` (cinza médio)
  - Background: `#ffffff` (branco puro)
  - Text: `#374151` (cinza escuro)
  - Accent: `#d1d5db` (cinza claro)
- **Tipografia**: Inter (Google Fonts)
- **Layout**: Responsivo com mobile-first approach

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção hero com apresentação
│   ├── Projects.tsx    # Lista de projetos
│   ├── ProjectCard.tsx # Componente de card de projeto
│   ├── Contact.tsx     # Seção de contato com links sociais
│   └── Footer.tsx      # Rodapé
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais do Tailwind
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Comandos

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Navegar para o diretório
cd portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173/`

## 📱 Funcionalidades

- **Navegação suave** entre seções
- **Design responsivo** (mobile-first)
- **SEO otimizado** com meta tags apropriadas
- **Performance** otimizada com Vite
- **Acessibilidade** seguindo boas práticas
- **Links sociais** (GitHub, LinkedIn, Email)
- **Grid de projetos** responsivo

## 🌐 Seções

1. **Header**: Navegação fixa com links suaves
2. **Hero**: Apresentação pessoal e call-to-actions
3. **Projetos**: Grid responsivo com cards de projetos
4. **Contato**: Links para GitHub, LinkedIn e email
5. **Footer**: Informações de copyright

## 🎯 SEO e Meta Tags

O site inclui meta tags otimizadas para:
- SEO básico (title, description, keywords)
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Theme color para PWA

## 🚀 Deploy

O projeto está configurado para deploy fácil em:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Fazer upload da pasta 'dist' no Netlify
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para servir da pasta 'dist'
```

## 📝 Customização

### Atualizando Projetos
Edite o array `projects` em `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Seu Projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "TypeScript"],
    status: "completed" | "in-progress",
    link: "https://seu-projeto.com" // opcional
  }
];
```

### Alterando Cores
Modifique as cores em `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#111827',
      secondary: '#6b7280',
      // ... outras cores
    }
  }
}
```

### Atualizando Informações Pessoais
- **Contatos**: Edite os links em `src/components/Contact.tsx`
- **Apresentação**: Modifique o texto em `src/components/Hero.tsx`
- **SEO**: Atualize as meta tags em `index.html`

## 📊 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build local
- `npm run lint` - Executa ESLint

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões são bem-vindas! Sinta-se à vontade para:
1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido por Matheus Zilli** 
- GitHub: [matheuszilli](https://github.com/matheuszilli)
- LinkedIn: [matheus-zilli](https://www.linkedin.com/in/matheus-zilli/)
- Email: matheuszilli@outlook.com