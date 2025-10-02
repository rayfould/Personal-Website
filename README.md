# Portfolio

Modern portfolio built with Astro, React, and Tailwind CSS.

## Tech Stack
- **Astro** - Static site framework
- **React** - UI library (for interactive components)
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

## Project Structure
```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes
│   ├── styles/      # Global styles
│   ├── content/     # MDX/markdown content
│   ├── data/        # JSON data files
│   ├── lib/         # Utilities and helpers
│   └── types/       # TypeScript types
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Path Aliases

Import using clean paths:
```typescript
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
```
