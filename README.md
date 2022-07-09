# Local

Install NPM Dependency

### `npm install`

Run Project

### `npm install && npm run start`

Run Test

### `npm run test`

Test Coverage Report

### `npm run coverage`

# Docker

Build Docker Container

### `docker build . -t local/teradici`

Run Docker Container

### `docker run -p 3000:3000 -d local/teradici`

# Teradici

- Written in `react`
- Styled with `tailwind`
- Global State Managed with `redux`
- Persist on page reload manage with `redux-presist`
- Dispatch handled with `redux-thunk`
- Tested with `@testing-library/react`
- Additionally you can run with `docker`

## Description

- Simple client-side Todo App Created with React and Javascript
- User can Add Task, Mark them As complete, Delete Task, Hide Task which are completed
- Unit tested with above 90% of code coverage
- Run Locally or with Docker Container
