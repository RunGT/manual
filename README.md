# Manual Quiz Case Study by Glenroy-Terence

A multi-step hair loss treatment quiz for Manual, built with React and TypeScript using Next.js. The quiz is designed to guide users through a medical questionnaire with a clean, responsive UI and tailored results.

## Features

- Three-step multiple-choice quiz powered by API
- Auto-advances to next step on selection
- Option to go back and change previous answers
- Reject flow with dynamic messaging
- Results page with clear CTA to Manual site
- Fully responsive design across mobile and desktop
- Styled-components with custom theme
- Accessible focus management and visual feedback
- Custom font (TT Norms)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Clone the repo

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Quiz will be available at `http://localhost:3000/quiz`.

## 🧹 Folder Structure

```
src/
  components/
    quiz/               ← Quiz flow components (container, step, result)
    helpsections/       ← Landing page help cards
    Footer.tsx
    LandingHero.tsx     ← CTA + Hero image
  styles/
    theme.ts            ← Custom theme (colours, breakpoints)
    styled.d.ts         ← Theme typing for styled-components
  types/
    quiz.ts             ← Strong typing for questions and answers
public/
  fonts/tt-norms/       ← TT Norms custom font
  images/               ← Background and illustrations
```

## 🧱 Design & Architecture

The architecture of the project is inspired by principles of Atomic Design. While the project is not formally structured into atomic/molecular/organism directories, components were built in a modular, composable way:

- Atomic elements such as buttons, labels, and layout wrappers are implemented using styled-components.
- Reusable compositions like `QuestionStep` and `LandingHero` act as Molecules or Organisms.
- `QuizContainer` behaves as a Template/Controller, orchestrating quiz state and step rendering.

This layered approach ensures scalability and readability without overcomplicating the structure for the tech test scope.

Key decisions:

- 🎯 Used Next.js for built-in routing and future extensibility (e.g. SSR, dynamic quizzes).
- ✅ Answers are stored in state and prefilled when navigating backward.
- 🚫 The Manual logo is hidden on the result screen to avoid decision fatigue and push users toward the CTA.
- 📄 Fonts were added via @font-face and applied site-wide.
- 🎨 All colours and breakpoints are centralised in the theme for reusability and design consistency.

## 📊 Areas for Improvement (with more time)

| Area               | Details |
|--------------------|---------|
| ✨ Transitions      | Add page fade or slide animations (e.g. Framer Motion or CSS transitions) between quiz steps to improve flow. |
| 🧠 API Caching      | Store fetched quiz questions in sessionStorage/localStorage to persist between refreshes or navigation. |
| 💾 Answer Persistence | Persist answers across page reloads via localStorage. |
| 📊 Analytics & Validation | I would integrate Mixpanel to validate engagement and funnel performance, e.g. step drop-offs, rejection rates, and completion times. |
| ✅ Testing          | Add unit and integration tests with React Testing Library + Jest to validate component behavior and edge cases. |
| 🔍 Input Handling   | Expand question support to handle other input types like sliders or text areas. |
| ♿ Accessibility     | Enhance keyboard nav and screen reader support using proper ARIA roles and live regions. |


## 🎯 Fonts

TT Norms was used as the typeface. The following weights/styles were added via `@font-face`:

- TT Norms Pro Trial Normal (400)
- TT Norms Pro Trial Bold (700)

These are applied site-wide through the global stylesheet and theme.

## 💬 Final Thoughts

This project focused on clarity, safety, and user flow. Every design decision was made with simplicity and the user journey in mind. The back button maintains prior answers, selections persist across steps, and the result screen cleanly directs users to Manual's sales funnel.

With more time, I would’ve layered in Mixpanel tracking for real-time user validation and built out a testing suite to ensure future-proof scalability.

---

🛠 Built using Next.js, React, TypeScript, and styled-components
