const img = (file) => `${import.meta.env.BASE_URL}img/${file}`

export const THEMES = [
  { id: 'red', label: 'Vermelho', color: '#e83151', favicon: img('icon-portfolio-red.png') },
  { id: 'purple', label: 'Roxo', color: '#b191ff', favicon: img('icon-portfolio-purple.png') },
  { id: 'blue', label: 'Azul', color: '#147de5', favicon: img('icon-portfolio-blue.png') },
]

export const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export const SKILLS = [
  { name: 'HTML', description: 'Linguagem para criar e estruturar conteúdo na web', icon: img('html-icon.png') },
  { name: 'CSS', description: 'Linguagem de estilização para documentos HTML', icon: img('css-icon.png') },
  { name: 'JavaScript', description: 'Linguagem de interação para páginas web', icon: img('js.png') },
  { name: 'Java', description: 'Linguagem para criação de aplicações', icon: img('java.png') },
  { name: 'Spring Boot', description: 'Framework para a criação de aplicações', icon: img('springboot-icon.png') },
  { name: 'SQL', description: 'Linguagem para gerenciar banco de dados', icon: img('sql-icon.png') },
]

// Para adicionar um projeto real, preencha title/description/image/tags e, se houver, repo e/ou demo (URL).
export const PROJECTS = [
  { title: 'Projeto 1', description: 'Em breve', image: img('image-projeto1.jpg'), tags: [] },
  { title: 'Projeto 2', description: 'Em breve', image: img('image-projeto1.jpg'), tags: [] },
  { title: 'Projeto 3', description: 'Em breve', image: img('image-projeto1.jpg'), tags: [] },
  { title: 'Projeto 4', description: 'Em breve', image: img('image-projeto1.jpg'), tags: [] },
]

export const CONTACT = {
  email: 'educoppi8@gmail.com',
  socials: [
    { name: 'GitHub', href: 'https://github.com/educoppi', icon: img('github-icon.png') },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardocoppi2004/', icon: img('linkedin-icon.png') },
  ],
}

export const CV_URL = `${import.meta.env.BASE_URL}download/CV_EduardoCoppi.pdf`
