const API_URL = 'https://to-do-app-a.onrender.com'; // changes made here
const APP_NAME = 'Tasky';

function applyAppName() {
  const appNameElements = document.querySelectorAll('.app-name');

  for (const element of appNameElements) {
    element.textContent = APP_NAME;
  }

}
document.addEventListener('DOMContentLoaded', applyAppName);

