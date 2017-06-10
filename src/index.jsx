import 'es6-object-assign/auto';

import { h, render } from 'preact';
import deepForceUpdate from 'preact-deep-force-update';

import { version } from '../package.json';
import App from './App';

// Save the App component to refresh it later.
let app = null;
const handleAppRef = (component) => {
  app = component;
};

// Used to inject changes in case Wright does hot reload (Optional).
window.refresh = () => {
  deepForceUpdate(app);
};

// Ensure that DOM has loaded to render the app.
document.addEventListener('DOMContentLoaded', () => {
  render(
    <App ref={handleAppRef} />,
    document.getElementById('root')
  );
});

// Log the app's version (from package).
console.log(`App version: ${version}`);

