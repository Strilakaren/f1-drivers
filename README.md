# F1 Drivers

React web app for browsing and managing Formula 1 drivers. Built as an exam project in DS3103 Web Development, with the focus on React. The app gets its data from a small ASP.NET Core Web API.

## Features

- Browse all drivers
- Add, update and delete drivers
- Upload driver images
- Shared state with the Context API

## Tech stack

- React, React Router, Axios and Tailwind CSS
- ASP.NET Core Web API on .NET 6
- Entity Framework Core with SQLite

## Running the project

The original images are not included because of copyright, so the app shows placeholders and driver photos will not load until you upload your own.

Start the API from `WebAPI`. It runs on `https://localhost:7031`.

```bash
cd WebAPI
dotnet run
```

Start the frontend in another terminal.

```bash
cd ReactApplication
npm ci
npm start
```
