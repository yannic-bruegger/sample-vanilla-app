const ENDPOINT = ''

export async function createItem(data) {
  const result = await fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return result;
}

export async function updateItem(id, data) {
  const result = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return result;
}

export async function deleteItem(id) {
  const result = await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return result;
}

export async function getItem(id) {
  const result = await fetch(`${ENDPOINT}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return result;
}

export async function getItems() {
  const result = await fetch(`${ENDPOINT}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return result;
}