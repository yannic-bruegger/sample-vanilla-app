function getValue(element) {
  switch (element.type) {
    case 'checkbox': return element.checked;
    case 'radio': return element.checked;
    default: return element.value;
  }
}

export function getFormData() {
  const boundElements = Array.from(document.querySelectorAll('[data-field]'));
  const data = Object.fromEntries(boundElements.map(element => [element.dataset.field, getValue(element)]));
  return data;
}