# 3D Configurator

An Angular application that demonstrates best practices for user authentication & authorization flows.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Setup & Usage

- Clone this repository: `git clone git@github.com:nikosanif/angular-authentication.git`
- `cd angular-authentication`
- Install dependencies: `npm install`
- Serve the Angular app: `npm start`
- Open your browser at: `http://localhost:4200`

### Useful Commands

- `npm start` - starts a dev server of Angular app
- `npm run build:prod` - builds full prod build
- `npm run lint` - linting source code of this project
- `npm run format:check` - runs prettier to check for formatting errors
- `npm run format:write` - runs prettier to format whole code base
- `npm run release` - runs standard-version to create new release
- `npm run analyze` - runs Webpack Bundle Analyzer to examine chunk files

## Features

### Authentication Flows

![3D Configurator Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-init-flow.png)
![3D Configurator Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-login-flow.png)

### Other Features

- Lazy loading of Angular modules
- API requests with `@ngrx/effects`
- Responsive design
- In-memory Web API

## Tech Stack

- [Angular](https://angular.io/)
- [NgRX](https://ngrx.io/) - @ngrx/{store,effects,component}
- [Taiga UI](https://taiga-ui.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Other dev tools
  - ESLint
  - Prettier
  - Husky
  - standard-vesrion

## High-level Design

Below is the high-level structure of the application.

```sh
./src
├── app
│   ├── app # root app component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.component.ts
│   │
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   │
│   ├── auth # includes authentication logic
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── guards
│   │   ├── interceptors
│   │   ├── login
│   │   └── store
│   │
│   ├── core # includes core utilities
│   │   ├── core.module.ts
│   │   ├── fake-api
│   │   └── services
│   │
│   ├── features # all features of application
│   │   ├── about
│   │   ├── home
│   │   └── secured-feat
│   │
│   └── shared # shared UI modules and utilities
│       ├── ui
│       └── util
│
├── assets
│   ├── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
├── ...
│
└── theme # global theme styles
    ├── _components.scss
    ├── _typography.scss
    └── index.scss
```
