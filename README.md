# Community Platform Landing Page

A modern, responsive landing page for a community platform built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- 🚀 Smooth animations with Framer Motion
- 🎯 Tailwind CSS for styling
- 📱 Mobile-first approach
- ⚡ Fast development with Vite

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   The application will automatically open in your default browser at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Hero section component
│   ├── CommunityOverview.tsx # Community overview
│   ├── UserLevels.tsx  # User levels component
│   └── Footer.tsx      # Footer component
├── styles/             # CSS styles
│   └── globals.css     # Global styles and CSS variables
├── src/                # Source files
│   └── main.tsx        # Application entry point
├── App.tsx             # Main App component
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives

## Customization

The project uses CSS custom properties (variables) for theming. You can customize colors, spacing, and other design tokens by modifying the variables in `styles/globals.css`.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).
