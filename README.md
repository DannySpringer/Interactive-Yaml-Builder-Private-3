# Interactive Yaml Builder - Hello World

A beautiful hello world application built with Vite, React, TypeScript, and shadcn/ui components.

![Application Screenshot](https://github.com/user-attachments/assets/1a6ad4e4-fa04-4416-b4d6-d880b58df801)

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **shadcn/ui** - Beautiful, accessible UI components
- 🎯 **TypeScript** - Type-safe development
- 🎪 **Tailwind CSS** - Utility-first CSS framework
- 🚀 **Static deployment ready** - Builds to static files

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-yaml-builder-private-3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for static hosting on platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static web server

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── index.css         # Global styles with Tailwind
└── main.tsx          # Application entry point
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Programming language
- **Vite** - Build tool
- **Tailwind CSS** - CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives

## License

This project is open source and available under the [MIT License](LICENSE).
