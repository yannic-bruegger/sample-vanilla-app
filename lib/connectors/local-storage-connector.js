export function createItem(data) {
  let items = JSON.parse(localStorage.getItem('items'));
  if (!items) items = [];
  items.push(data);
  localStorage.setItem('items', JSON.stringify(items));
}

export function updateItem(id, data) {
  const items = JSON.parse(localStorage.getItem('items'));
  items[id] = data;
  localStorage.setItem('items', JSON.stringify(items));
}

export function deleteItem(id) {
  const items = JSON.parse(localStorage.getItem('items'));
  items.splice(id, 1);
  localStorage.setItem('items', JSON.stringify(items));
}

export function getItem(id) {
  const items = JSON.parse(localStorage.getItem('items'));
  return items[id];
}

export function getItems() {
  const items = JSON.parse(localStorage.getItem('items'));
  return items;
}