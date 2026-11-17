const img = (file) => `${import.meta.env.BASE_URL}img/${file}`

// Textos que mudam com o idioma usam { en, pt }; os rótulos da interface ficam em src/i18n.jsx.

export const THEMES = [
  { id: 'red', color: '#e83151', favicon: img('icon-portfolio-red.png') },
  { id: 'purple', color: '#b191ff', favicon: img('icon-portfolio-purple.png') },
  { id: 'blue', color: '#147de5', favicon: img('icon-portfolio-blue.png') },
]

export const NAV_LINKS = ['inicio', 'sobre', 'projetos', 'contato']

export const SKILLS = [
  {
    name: 'Java',
    description: { en: 'Language for building applications', pt: 'Linguagem para criação de aplicações' },
    icon: img('java.png'),
  },
  {
    name: 'Spring Boot',
    description: { en: 'Framework for building APIs and services', pt: 'Framework para criação de APIs e serviços' },
    icon: img('springboot-icon.png'),
  },
  {
    name: 'SQL',
    description: { en: 'Language for managing databases', pt: 'Linguagem para gerenciar banco de dados' },
    icon: img('sql-icon.png'),
  },
  {
    name: 'TypeScript',
    description: { en: 'JavaScript with static typing', pt: 'JavaScript com tipagem estática' },
    icon: img('typescript-icon.svg'),
  },
  {
    name: 'React',
    description: { en: 'Library for building user interfaces', pt: 'Biblioteca para construir interfaces' },
    icon: img('react-icon.svg'),
  },
  {
    name: 'JavaScript',
    description: { en: 'Language for interactive web pages', pt: 'Linguagem de interação para páginas web' },
    icon: img('js.png'),
  },
  {
    name: 'HTML',
    description: { en: 'Language for structuring web content', pt: 'Linguagem para criar e estruturar conteúdo na web' },
    icon: img('html-icon.png'),
  },
  {
    name: 'CSS',
    description: { en: 'Language for styling HTML documents', pt: 'Linguagem de estilização para documentos HTML' },
    icon: img('css-icon.png'),
  },
]

// Para adicionar um projeto, inclua um objeto com title/description/image/tags e, se houver, repo e demo (URLs).
export const PROJECTS = [
  {
    title: 'Fluxo — Finance Dashboard',
    description: {
      en: 'Personal finance dashboard: log income and expenses, set a monthly savings goal and track your spending pace with category charts, a filterable history and multi-currency support.',
      pt: 'Dashboard de finanças pessoais: registre receitas e despesas, defina uma meta mensal de economia e acompanhe o ritmo de gastos com gráficos por categoria, histórico filtrável e suporte a várias moedas.',
    },
    image: img('finance-dashboard.png'),
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    repo: 'https://github.com/educoppi/finance-dashboard',
    demo: 'https://educoppi.github.io/finance-dashboard/',
  },
]

export const CONTACT = {
  email: 'educoppi8@gmail.com',
  socials: [
    { name: 'GitHub', href: 'https://github.com/educoppi', icon: img('github-icon.png') },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardocoppi2004/', icon: img('linkedin-icon.png') },
  ],
}
