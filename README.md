# Coding Test - Breather

## Set-up and running

1. Verify you have Node installed (version 12 and up)
2. Run `npm install` (or `yarn install`, depending on your preference)
3. Run `npm start`

The application will be visible at http://localhost:3000.

## Dependencies

This application depend on the following packages. Each one of those was chosen because it helps writing code faster, but is light-weight enough that the logic behind using them is not hidden away.

They have few dependencies themselves, and are very light, allowing to not bloat the application unnecessarily.

* `react`, `react-dom`, `react-scripts`, the standards React packages
* `@chakra-ui/core`, `@emotion/core`, `@emotion/styled`, `emotion-theming` provide a basic library of components to easily build a nice customisable UI 
* `downshift` helps creating accessible typeahead and autocomplete components
* `react-fetch-hook` facilitates handling the logic around using fetch in React components
* `dayjs` and its plugin `relativeTime` format dates to be more human readable


