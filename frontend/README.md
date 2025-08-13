# TruthLens AI - Advanced Fact-Checking Platform

## 🚀 Quick Start (Windows)
```bash
# Double-click this file or run in PowerShell:
./setup-dev.bat
```

## 🚀 Quick Start (Mac/Linux)
```bash
chmod +x setup-dev.sh
./setup-dev.sh
```

## 🔧 Manual Setup
```bash
npm install
npm run dev
```

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run setup` - Install dependencies and start dev server
- `npm run reset` - Reset all dependencies and reinstall
- `npm run check` - Check project status and dependencies

## 🤖 AI Integration

Your AI models are integrated in:
- **Article Analysis**: Automatic fact-checking when uploading articles
- **User Queries**: Interactive AI panel for user questions
- **Fact Checking**: Standalone fact-checking tool

### AI Service Configuration
Update your AI API endpoint in `lib/ai-service.ts`:
```typescript
this.baseUrl = 'YOUR_AI_API_ENDPOINT';
```

## 🛠️ Troubleshooting

### If you get "package.json not found":
1. Make sure you're in the project directory
2. Run `npm run check` to verify location
3. Use the setup scripts provided

### If dependencies fail:
```bash
npm run reset
```

## 🎯 Project Structure
```
nityam-ai/
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── lib/                # Utilities and services
├── components/ui/       # UI components
└── public/             # Static assets
```

Your AI functionality will work regardless of the project name!