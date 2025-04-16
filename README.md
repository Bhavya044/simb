# Simbian Security Operations Demo

This project shows how Simbian AI helps with security operations. It compares security work with and without Simbian using Next.js 14 and Tailwind CSS.

## What I Did

I made two views to show the difference:

1. Without Simbian: Shows growing alerts and problems
2. With Simbian: Shows how things get better with AI

## Animations

I used Framer Motion to make things move smoothly:

- Numbers that change when alerts update
- Messages that show what's happening
- Smooth changes between views

## Things to Fix Later

If I had more time, I would:

1. Make animations work better
2. Add more things to click and try
3. Make some UI changes in cards
4. Show more details about alerts

## Features

### Without Simbian

- Alert cards with growing numbers (200 ignored, 35 wrongly closed, 5 active threats)
- Messages showing problems
- Red warning signs

### With Simbian

- Steps showing how Simbian works
- Clean cards with no alerts
- Green success signs

## Tech Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React

## How to Start

1. Get the code:

```bash
git clone <repository-url>
cd simbian
```

2. Install what you need:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see it

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

## Commands

- `npm run dev` - Start server

