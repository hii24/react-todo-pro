<div align="center">

# ✅ react-todo-pro

**A todo app that takes itself a little too seriously**

_My first serious React + TypeScript project. Built to drill clean component patterns, a11y, and offline-first architecture._

[![React](https://img.shields.io/badge/React-17.x-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![PWA](https://img.shields.io/badge/PWA-Offline_first-5A0FC8?style=for-the-badge&logo=pwa&logoColor=fff)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 🌗 Light / dark theme with `prefers-color-scheme` detection
- 🖱️ Drag & drop reordering (`react-beautiful-dnd`)
- 📦 Offline-first — works with no network, syncs to localStorage
- ♿ Full keyboard navigation, screen-reader friendly
- 🏷️ Tags, due dates, priority, search
- 🔁 Undo/redo last 20 actions
- 📱 Installable PWA — works on mobile home screen
- 📤 Export/import JSON

## 🚀 Run locally

```bash
git clone https://github.com/hii24/react-todo-pro.git
cd react-todo-pro
npm install
npm start
```

## 🧠 Why I built it

I was a few months into commercial React work and wanted to drill the patterns nobody teaches in tutorials: proper TS generics, custom hooks, a11y from the start, offline-first PWA setup. A todo app is the smallest surface that touches all of those.

A lot of the patterns I extracted here (the `useUndoableState` hook, the focus-trap modal, the form schema validation) ended up reused across production projects.

## 🛠️ Tech notes

- **State**: vanilla `useReducer` (kept it dependency-light on purpose)
- **Persistence**: IndexedDB via `idb-keyval`, fallback to localStorage
- **Routing**: React Router v6
- **Tests**: Jest + React Testing Library, ~85% coverage on logic modules

## 📜 License

MIT
