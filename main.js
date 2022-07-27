import connector from './lib/connector.js';

let items = connector.getItems();
items.forEach((item, i) => {
  const clone = document.querySelector('template#item').content.cloneNode(true);
  clone.querySelector('[data-delete]').addEventListener('click', (event) => {
    event.preventDefault();
    connector.deleteItem(i);
    location.reload();
  });
  clone.querySelector('[data-view]').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `/form-display?id=${i}`;
  });
  clone.querySelector('[data-edit]').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `/form-edit?id=${i}`;
  });
  Array.from(clone.querySelectorAll('[data-field]')).forEach(td => {
    td.innerText = item[td.dataset.field];
  });
  document.querySelector('table').appendChild(clone);
});

console.log(items);