# HeadlessPro Frontend

[![Fresh](https://img.shields.io/badge/Fresh-1.7.3-blue)](https://fresh.deno.dev/)
[![Deno](https://img.shields.io/badge/Deno-2.4.2-green)](https://deno.land/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)

> The official frontend marketing website and documentation portal for HeadlessPro - a modern headless commerce platform.

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

HeadlessPro Frontend is a modern, responsive marketing website built with [Fresh](https://fresh.deno.dev/) - a full-stack web framework for Deno. This application serves as the public-facing interface for HeadlessPro, showcasing the platform's capabilities, providing comprehensive documentation, and converting visitors into customers.

### What is HeadlessPro?

HeadlessPro is a complete headless commerce platform that enables businesses to "Launch Once. Grow Everywhere." It provides a modern, API-first approach to e-commerce that separates the frontend presentation layer from the backend commerce logic, allowing for greater flexibility, performance, and scalability.

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Professional Typography**: Playfair Display for headings, Inter for body text
- **Consistent Design System**: Unified color palette and component library
- **Accessibility**: WCAG compliant with screen reader support
- **Performance Optimized**: Lighthouse 95+ scores with fast loading times

### 📱 Pages & Sections
- **Homepage**: Hero section with value proposition and feature showcase
- **Why Headless**: Educational content about headless commerce benefits
- **Platform**: Technical overview and architecture details
- **Solutions**: Industry-specific use cases and implementations
- **Services**: Custom development and migration offerings
- **Pricing**: Transparent pricing structure and plans
- **Documentation**: Comprehensive API docs and integration guides
- **Blog**: Industry insights and technical articles
- **Contact**: Lead capture and sales inquiry forms

### 🔧 Technical Features
- **Island Architecture**: Client-side interactivity where needed
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Navigation**: Smooth page transitions and loading states
- **Form Handling**: Contact forms with validation and submission
- **Image Optimization**: Responsive images with proper alt text
- **Analytics Ready**: Google Analytics and conversion tracking

## 🛠 Tech Stack

### Core Framework
- **[Fresh](https://fresh.deno.dev/)**: Full-stack web framework for Deno
- **[Deno](https://deno.land/)**: Secure runtime for JavaScript and TypeScript
- **[Preact](https://preactjs.com/)**: Fast 3kB alternative to React

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Playfair Display](https://fonts.google.com/specimen/Playfair+Display)**: Professional serif font for headings
- **[Inter](https://fonts.google.com/specimen/Inter)**: Modern sans-serif font for body text
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)**: Monospace font for code elements

### Development Tools
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[ESLint](https://eslint.org/)**: Code linting and formatting
- **[Prettier](https://prettier.io/)**: Code formatting

### Performance & Optimization
- **Edge Computing**: Global CDN distribution
- **Image Optimization**: Responsive images and lazy loading
- **Code Splitting**: Automatic code splitting for optimal performance
- **Caching**: Intelligent caching strategies

## 🚀 Getting Started

### Prerequisites

- **[Deno](https://deno.land/)**: Version 1.40.0 or higher
- **Node.js**: Version 18 or higher (for some development tools)
- **Git**: Version control system

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/headlesspro-frontend.git
   cd headlesspro-frontend
   ```

2. **Install dependencies**
   ```bash
   deno task start
   ```

3. **Start the development server**
   ```bash
   deno task start
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

### Development Commands

```bash
# Start development server with hot reload
deno task start

# Build for production
deno task build

# Preview production build
deno task preview

# Run linting and type checking
deno task check

# Update Fresh framework
deno task update
```

## 📁 Project Structure

```
headlesspro-frontend/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── FeatureCard.tsx
│   └── ...
├── islands/            # Client-side interactive components
│   ├── Header.tsx
│   ├── ContactForm.tsx
│   ├── FeatureTabs.tsx
│   └── ...
├── routes/             # Page components and routing
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── services.tsx    # Services page
│   ├── contact.tsx     # Contact page
│   ├── _app.tsx        # Global layout
│   └── ...
├── static/             # Static assets
│   ├── images/         # Image files
│   ├── styles.css      # Global styles
│   └── ...
├── data/               # Static data and content
├── fresh.config.ts     # Fresh configuration
├── deno.json          # Deno configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md          # This file
```

### Key Directories

- **`components/`**: Server-side rendered, reusable UI components
- **`islands/`**: Client-side interactive components with state management
- **`routes/`**: Page components that define the application's routing
- **`static/`**: Static assets like images, CSS, and other files
- **`data/`**: Static data, content, and configuration files

## 🛠 Development

### Code Style

This project follows strict TypeScript and ESLint rules:

```bash
# Check code formatting
deno fmt --check

# Run linting
deno lint

# Type checking
deno check **/*.ts && deno check **/*.tsx
```

### Component Guidelines

#### Server Components (`components/`)
- Use for static, server-rendered content
- No client-side interactivity
- Optimized for performance and SEO

#### Island Components (`islands/`)
- Use for interactive features requiring client-side state
- Handle user interactions, form submissions, animations
- Hydrated on the client for interactivity

### Styling Guidelines

- **Tailwind CSS**: Use utility classes for styling
- **Responsive Design**: Mobile-first approach with breakpoint prefixes
- **Design System**: Follow established color palette and typography
- **Accessibility**: Ensure proper contrast ratios and semantic HTML

### Adding New Pages

1. **Create a new route file** in `routes/`
   ```tsx
   // routes/new-page.tsx
   import { Head } from "$fresh/runtime.ts";

   export default function NewPage() {
     return (
       <>
         <Head>
           <title>New Page | HeadlessPro</title>
         </Head>
         <div class="container mx-auto px-4 py-16">
           <h1 class="text-4xl font-display font-bold">New Page</h1>
         </div>
       </>
     );
   }
   ```

2. **Add navigation links** in `islands/Header.tsx`

3. **Update sitemap** if needed

### Adding New Components

1. **Server Component** (static content):
   ```tsx
   // components/NewComponent.tsx
   export default function NewComponent() {
     return <div class="p-4">Static content</div>;
   }
   ```

2. **Island Component** (interactive):
   ```tsx
   // islands/NewIsland.tsx
   import { useSignal } from "@preact/signals";

   export default function NewIsland() {
     const count = useSignal(0);
     return (
       <button onClick={() => count.value++}>
         Count: {count.value}
       </button>
     );
   }
   ```

## 🚀 Deployment

### Production Build

```bash
# Build the application
deno task build

# Preview the build
deno task preview
```

### Deployment Options

#### Deno Deploy (Recommended)
```bash
# Deploy to Deno Deploy
deno deploy --project=your-project-name
```

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

#### Netlify
```bash
# Build and deploy
deno task build
netlify deploy --prod --dir=_fresh/static
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# Analytics
GA_TRACKING_ID=your-ga-tracking-id

# Contact Form
CONTACT_FORM_ENDPOINT=your-form-endpoint

# API Endpoints
API_BASE_URL=your-api-base-url
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and checks**
   ```bash
   deno task check
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Standards

- **TypeScript**: All code must be properly typed
- **ESLint**: Follow the project's linting rules
- **Prettier**: Use consistent code formatting
- **Tests**: Add tests for new features
- **Documentation**: Update docs for API changes

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(header): add mobile navigation menu
fix(contact): resolve form submission error
docs(readme): update installation instructions
style(components): improve button hover states
refactor(routes): simplify page component structure
test(islands): add unit tests for contact form
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help

- **Documentation**: Check the `/docs` section of the website
- **Issues**: Report bugs and feature requests on GitHub
- **Discussions**: Join community discussions on GitHub
- **Email**: Contact us at hello@headlesspro.com

### Common Issues

#### Development Server Not Starting
```bash
# Check Deno version
deno --version

# Clear cache and restart
deno cache --reload dev.ts
deno task start
```

#### Build Errors
```bash
# Check for TypeScript errors
deno check **/*.ts && deno check **/*.tsx

# Verify dependencies
deno cache --reload dev.ts
```

#### Styling Issues
```bash
# Rebuild Tailwind CSS
deno task build

# Check Tailwind configuration
tailwind.config.ts
```

## 🔗 Links

- **Website**: [https://headlesspro.com](https://headlesspro.com)
- **Documentation**: [https://headlesspro.com/docs](https://headlesspro.com/docs)
- **API Reference**: [https://headlesspro.com/docs/api](https://headlesspro.com/docs/api)
- **Blog**: [https://headlesspro.com/blog](https://headlesspro.com/blog)
- **Contact**: [https://headlesspro.com/contact](https://headlesspro.com/contact)

## 🙏 Acknowledgments

- **Fresh Framework**: For the excellent full-stack framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Deno Team**: For the secure JavaScript runtime
- **Contributors**: All who have contributed to this project

---

**Built with ❤️ by the HeadlessPro Team**
