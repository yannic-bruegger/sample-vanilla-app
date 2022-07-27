import * as localStorageConnector from './connectors/local-storage-connector.js';
import * as webserviceConnector from './connectors/webservice-connector.js';

const CONNECTOR_TYPE = 'local-storage';
const connector = {}

if (CONNECTOR_TYPE === 'local-storage') {
  connector.createItem = localStorageConnector.createItem;
  connector.updateItem = localStorageConnector.updateItem;
  connector.deleteItem = localStorageConnector.deleteItem;
  connector.getItems = localStorageConnector.getItems;
  connector.getItem = localStorageConnector.getItem;
}

if (CONNECTOR_TYPE === 'webservice') {
  connector.createItem = webserviceConnector.createItem;
  connector.updateItem = webserviceConnector.updateItem;
  connector.deleteItem = webserviceConnector.deleteItem;
  connector.getItems = webserviceConnector.getItems;
  connector.getItem = webserviceConnector.getItem;
}

export default connector;