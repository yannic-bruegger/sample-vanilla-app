import { getFormData } from './lib/data.js.js.js.js';
import { createItem } from './lib/connector.js.js.js.js';

const FORM_NAME = 'custom-form';

document.querySelector(`form#${FORM_NAME} input[value="Save"]`).addEventListener('click', (event) => {
  event.preventDefault();
  try {
    createItem(getFormData());
  } catch {
    console.error('Error creating item');
  }
});