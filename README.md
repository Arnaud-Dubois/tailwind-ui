## Classic UI collection with tailwindcss

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Tailwind

https://medium.com/@xijo/create-react-app-with-tailwind-via-postcss-plus-purgecss-5c36b4c33ba7

npm install tailwindcss
npm install npm-run-all
npm install postcss-cli
npm install purgecss
(npm install @fullhuman/postcss-purgecss)

## create postcss.config.js at root
copy
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
    './public/index.html'
  ],
  css: ['./src/tailwind.css'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ],
};

## init tailwind
npx tailwind init tailwind.config.js
create ./src/css/tailwind.src.css
with    @tailwind base;
        @tailwind components;
        @tailwind utilities;
import './tailwind.css in App.js

## configure package.json
"scripts": {
  "start": "npm-run-all -p start:css start:js",
  "build": "npm-run-all build:css build:js",
  "start:js": "react-scripts start",
  "build:js": "react-scripts build",
  "start:css": "postcss src/css/tailwind.src.css -o src/tailwind.css -w",
  "build:css": "postcss src/css/tailwind.src.css -o src/tailwind.css --env production" 
},


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
