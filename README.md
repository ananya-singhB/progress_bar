# Progress Bars

A minimal React project where clicking an “Add Progress Bar” button creates a new bar that immediately and smoothly fills from 0% to 100% in about 2 seconds.

## Features

- **Add Bars Dynamically**: Create a new progress bar with a single button click.
- **Smooth Animation**: Each bar fills up smoothly over ~2000ms.
- **Independent Operation**: Every bar animates independently, even when added in quick succession.
- **Minimal Code**: Built with simple React hooks and no external libraries.

## How It Works

- The `App` component maintains a list of bars in its state. Clicking the "Add Progress Bar" button appends a new item to this list.
- Each `ProgressBar` component uses a custom hook, `useProgress`, which handles the animation logic.
- The `useProgress` hook uses `requestAnimationFrame` to accurately calculate the fill percentage based on elapsed time, ensuring a smooth transition regardless of system load.
- The bar's visual `width` is updated in real-time based on the percentage from the hook.

## Getting Started

1.  **Clone the repository** (or download the source files).
2.  **Install dependencies** via the terminal:
    ```
    npm install
    ```
3.  **Run the development server:**
    ```
    npm run dev
    ```
    (Or `npm start` if you are using Create React App)

## Project Structure

- `src/`
    - `App.jsx` - Renders the main button and the list of progress bars.
    - `ProgressBar.jsx` - The visual component for a single progress bar.
    - `useProgress.js` - The custom hook that manages the animation timing.
    - `styles.css` - Minimal styling for the components.
