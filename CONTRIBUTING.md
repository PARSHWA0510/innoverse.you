# Contributing to Innoverse.you

Thank you for your interest in contributing to Innoverse.you! We welcome all contributions that help improve our community platform.

## 🛡️ Repository Security

This repository is protected with branch protection rules to ensure code quality and maintain security standards.

### **🚫 Direct Commits to Main Branch are NOT Allowed**
- The `main` branch is protected and requires Pull Requests
- All changes must go through the PR review process
- Direct pushes to `main` will be rejected

## 🚀 Quick Start for Contributors

### 1. Fork & Clone
```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/innoverse.you.git
cd innoverse.you
```

### 2. Set Up Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### 3. Create a Feature Branch
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/issue-description
```

### 4. Make Changes & Test
- Follow existing code patterns and conventions
- Test your changes locally
- Ensure build passes: `npm run build`
- Run linting: `npm run lint`

### 5. Commit & Push
```bash
# Stage your changes
git add .

# Commit with conventional commit message
git commit -m "feat: add your descriptive commit message"

# Push to your fork
git push origin feature/your-feature-name
```

### 6. Create Pull Request
1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template with detailed description
5. Wait for review and approval

## 📝 Pull Request Requirements

Your PR must meet these requirements:

- ✅ **Clear title and description** - Explain what and why
- ✅ **Pass all status checks** - Build and tests must pass  
- ✅ **Code review approval** - At least 1 maintainer approval required
- ✅ **Up to date with main** - Rebase if needed
- ✅ **All conversations resolved** - Address all reviewer comments

## 🎯 Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear project history:

```
feat: add new user level component
fix: resolve mobile navigation issue
docs: update contribution guidelines
style: improve responsive design for tablets
refactor: optimize component performance
test: add unit tests for UserLevels component
chore: update dependencies
```

## 🏗️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)
- Add proper TypeScript types

### Component Structure
```tsx
// components/YourComponent.tsx
import { motion } from "framer-motion";
import { SomeIcon } from "lucide-react";

interface YourComponentProps {
  // Define props with TypeScript
}

export function YourComponent({ ...props }: YourComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="responsive-classes"
    >
      {/* Your component content */}
    </motion.div>
  );
}
```

### Testing Your Changes
```bash
# Development server
npm run dev

# Production build test
npm run build
npm run preview

# Code quality
npm run lint
```

## 🐛 Bug Reports & Feature Requests

### Reporting Bugs
1. Check [existing issues](https://github.com/PARSHWA0510/innoverse.you/issues) first
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information

### Feature Requests
1. Search existing issues for similar requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

## 🔍 Code Review Process

1. **Automated Checks** - All PRs run through automated testing
2. **Maintainer Review** - At least one maintainer will review your PR
3. **Feedback & Iteration** - Address any requested changes
4. **Approval & Merge** - Once approved, maintainers will merge your PR

## 📞 Getting Help

Need help or have questions?

- 💬 **WhatsApp Community**: [Join here](https://chat.whatsapp.com/DE0qy17AB6t1Qdalf1D2iL)
- 💼 **LinkedIn**: [Connect with us](https://www.linkedin.com/company/innoverse-you/)
- 📧 **Email**: info.innoversyou@gmail.com
- 📱 **Phone**: +91 9227590139 / +91 9909405694

## 🙏 Recognition

All contributors will be recognized in our project. Thank you for helping make Innoverse.you better for everyone!

---

*By contributing to this project, you agree to abide by our code of conduct and the terms outlined in this document.*
