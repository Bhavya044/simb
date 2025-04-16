# Simbian Security Operations Demo

This project demonstrates the difference between security operations with and without Simbian AI. Built with Next.js 14 and Tailwind CSS;

## Features

### Without Simbian

- Real-time alert cards showing growing numbers (Ignored Alerts = 200, Wrongly Closed = 35, Active Threats = 5)
- Animated status messages showing manual security operations struggles
- Visual indicators of alert fatigue and missed threats

### With Simbian

- Step-by-step flow showing automated security operations
- Clean, zero-alert cards demonstrating perfect security posture
- Animated transitions showing efficiency gains

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd simbian
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # React components
│   ├── alerts/        # Alert-related components
│   │   ├── AlertCard.tsx
│   │   └── AlertSummaryCard.tsx
│   ├── sections/      # Main page sections
│   │   └── SimbianComparison.tsx
│   ├── UI/           # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── Icon.tsx
│   │   ├── IconBox.tsx
│   │   ├── Spinner.tsx
│   │   └── Icons/     # SVG icons
│   ├── BackgroundWrapper.tsx
│   ├── HeroSection.tsx
│   └── Toolbar.tsx
├── hooks/             # Custom React hooks
│   └── useVisualMode.ts
├── pages/             # Next.js pages
└── utils/             # Utility functions
    └── util.helper.ts
```

## Development Commands

- `npm run dev`
