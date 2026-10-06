# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal resume built with Create React App (react-scripts 5), styled-components and i18next. It is rendered as a fixed A4 page and meant to be exported to PDF with the browser's print dialog (cmd+p). There is no backend and no routing.

## Commands

- `npm start` — dev server on http://localhost:3000 (lint errors show in the console; ESLint config is CRA's `react-app`)
- `npm run build` — production build into `build/`
- `npm test` — Jest in watch mode. There are currently no test files; for a single test use `npm test -- path/to/file.test.js` (add `--watchAll=false` for a one-shot run)

## Architecture

**Content lives in translation files, not components.** Nearly all resume text (skills, experiences, education, contact info, etc.) is in `src/i18n/translations/en.json` and `fr.json`. Components pull it with `t(...)`, using `t(key, { returnObjects: true })` for lists. Editing the resume usually means editing both JSON files and keeping their structure in sync. Entries in `professional.experiences.list` have a `show` boolean; entries with `show: false` are filtered out but kept for later use.

**Dynamic values** go in through i18next interpolation (`{{years}}`). For example, years of experience come from `getDeveloperActivityYears()` in `src/helpers/dates.js`, based on `DEVELOPER_START_DATE` in `src/constants.js`.

**Layout:** `App.js` wraps everything in a styled-components `ThemeProvider` and renders the language selector, the theme selector and `Wrapper`. `Wrapper` places sections in a two-column A4 page: a dark left sidebar (`LeftContainer`) and a main right column (`RightContainer`). Section components each sit in `src/components/<kebab-name>/` as a `Name.jsx` + `Name.styled.js` pair. Shared styled primitives (`Container`, `SectionHeader`, `List`, etc.) are in `src/components/common/`.

**Theming:** `src/styling/theme.js` exports theme objects that spread a shared `themeBase` (A4 sizes, spacing) and add colors. To add a theme, define it there and add an `<option>` and a `switch` case in `ThemeSelector.jsx`. Styled components read values via `${({ theme }) => theme.x}`.

**Print styles:** `src/styling/global-styles.js` defines `@page { size: A4 }` and `@media print` rules that hide `#language-selector` and `#theme-selector` and remove the page shadow. Any new on-screen-only control needs an id hidden there. The sidebar uses `-webkit-print-color-adjust: exact` so its dark background prints.

**Language switching** calls `i18n.changeLanguage` and then reloads the page (`App.js`). The language detector saves the choice, so the reload picks it up.

## Conventions

- Imports are absolute from `src/` (`jsconfig.json` sets `baseUrl: "src"`), e.g. `import { Container } from 'components/common/containers.styled'`. Some older files still use relative paths.
- Plain JavaScript (no TypeScript). Function components with default exports.
