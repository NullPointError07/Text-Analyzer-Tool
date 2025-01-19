# Text Analyzer Tool

## Project Overview

The Text Analyzer Tool is a web application built using Node.js, Express, and EJS templating. It allows users to authenticate using Google OAuth, analyze text data, and view the results on a dashboard. The application also implements caching for API routes to improve performance.

## Features

1. **User Authentication**:

   - Users can log in using their Google account.
   - The authentication process is handled using Passport.js with the Google OAuth strategy.
   - After successful authentication, users are redirected to the dashboard.

2. **Dashboard**:

   - The dashboard is a protected route that only authenticated users can access.
   - It displays a welcome message and provides a logout option.

3. **Text Analysis**:

   - Users can submit text data for analysis via API routes.
   - The application provides endpoints to create, read, update, and delete text data.
   - The results of the text analysis are cached to improve performance.

4. **Caching**:

   - The application uses `node-cache` to cache responses for the text analysis API routes.
   - Cached responses are served to reduce the load on the server and improve response times.

5. **Rate Limiting**:
   - The application uses `express-rate-limit` to limit the number of requests to the API.
   - This helps to prevent abuse and ensure fair usage of the API.

## API Routes

### `/api`

- **POST /api/texts**

  - Analyze and save a new text.
  - Accepts a JSON object with text content in the request body.
  - Returns a JSON object of the analyzed text with the result.

## View Files

### `views/index.ejs`

- The login page where users can authenticate using Google.
- Contains a link to initiate Google OAuth login.

### `views/dashboard.ejs`

- The dashboard page displayed after successful authentication.
- Shows a welcome message and a logout link.

## Middleware

### `authMiddleware.ts`

- **ensureAuthenticated**
  - Middleware to ensure the user is authenticated.
  - If the user is not authenticated, they are redirected to the login page.
  - Applied to protected routes like `/dashboard`.

### `cacheMiddleware.ts`

- **checkCache**
  - Middleware to check if a response is cached.
  - If a cached response is found, it is served.
  - If no cached response is found, the response is cached after it is generated.
  - Applied to the `/api` routes.

### `rateLimitMiddleware.ts`

- **apiLimiter**
  - Middleware to limit the number of requests to the API.
  - Configured using `express-rate-limit`.
  - Applied to all API routes to prevent abuse and ensure fair usage.

## Google OAuth 2.0 Login Implementation

### `authRoutes.ts`

- **GET /auth/google**

  - Initiates Google OAuth login.
  - Redirects the user to the Google login page.

- **GET /auth/google/callback**

  - Handles the callback from Google after authentication.
  - If authentication is successful, redirects the user to the dashboard.
  - If authentication fails, redirects the user to the home page.

- **GET /login**

  - Renders the login page.

- **GET /logout**
  - Logs the user out and destroys the session.
  - Redirects the user to the home page.
