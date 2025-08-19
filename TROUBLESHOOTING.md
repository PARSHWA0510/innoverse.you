# Troubleshooting Guide

## Common Issues and Solutions

### 1. Port Already in Use

If you see an error about port 3000 being already in use:

```bash
# Kill any process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### 2. Dependencies Not Found

If you see import errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 3. TypeScript Errors

If you see TypeScript compilation errors:

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Or rebuild the project
npm run build
```

### 4. Tailwind CSS Not Working

If styles aren't applying:

```bash
# Rebuild Tailwind CSS
npx tailwindcss -i ./styles/globals.css -o ./dist/output.css --watch
```

### 5. Browser Not Opening Automatically

If the browser doesn't open:

```bash
# Manually open the URL
open http://localhost:3000
# or
xdg-open http://localhost:3000  # Linux
```

### 6. Hot Reload Not Working

If changes aren't reflecting automatically:

```bash
# Restart the dev server
npm run dev
```

### 7. Memory Issues

If you encounter memory issues:

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

## Getting Help

If you're still experiencing issues:

1. Check the terminal output for error messages
2. Check the browser console for JavaScript errors
3. Ensure all dependencies are properly installed
4. Try clearing your browser cache
5. Check that you're using Node.js version 18 or higher

## System Requirements

- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Operating System**: macOS, Windows, or Linux
- **Browser**: Modern browser with ES6+ support
