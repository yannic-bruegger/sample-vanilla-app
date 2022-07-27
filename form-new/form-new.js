import { getFormData } from '../lib/data.js';
import connector from '../lib/connector.js';

const FORM_NAME = 'custom-form';

document.querySelector(`form#${FORM_NAME} input[value="Save"]`).addEventListener('click', (event) => {
  event.preventDefault();
  try {
    connector.createItem(getFormData());
    window.location.href = '/';
  } catch(error) {
    console.error('Error creating item', error);
  }
});