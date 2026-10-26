# Jesse Auta — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite.

## Run locally

1. Install [Node.js](https://nodejs.org/) (npm is included).
2. In this folder, install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Create and preview a production build:

   ```sh
   npm run build
   npm run preview
   ```

## Publish on GitHub Pages

1. Push this project to the `JesseAuta/jsa-web-portfolio` GitHub repository on its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The included workflow builds the site and publishes it whenever you push to `main`. You can also run it manually from the **Actions** tab.

The Vite configuration uses a relative asset base so the site can be hosted from a repository subpath.

## Personalize

Update the copy, focus areas, project details, and social links in `src/App.tsx`, the page title and description in `index.html`, and the visual styles in `src/styles.css`. Add preferred contact details when you are ready.
