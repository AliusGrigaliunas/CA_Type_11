import ProductsCollection from '../helpers/products-collection';
import products from '../data/products';
import initCategories from '../data/categories';
import productsCategories from '../data/products-categories';
import Table from './table';
import stringifyProps from '../helpers/stringify-props';

type ProductTableRow = [string, string, string, string, string];

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  constructor(selector: string) {
    const foundHtmlElement = document.querySelector<HTMLElement>(selector);
    if (foundHtmlElement === null) {
      throw new Error(`Kuriant 'App' komponentą nerastas HTML elementas naudojant selektorių: '${selector}'`);
    }

    this.htmlElement = foundHtmlElement;
    this.productsCollection = new ProductsCollection(products, initCategories, productsCategories);

    const stringifiedProducts = this.productsCollection.all.map(stringifyProps);
    const rowsData = stringifiedProducts.map<ProductTableRow>(({
      id,
      title,
      price,
      description,
      categories,
    }) => [
        id,
        title,
        price,
        description ?? '',
        categories,
      ]);

    this.productsTable = new Table({
      title: 'Visi produktai',
      columns: ['Id', 'Pavadinimas', 'Kaina', 'Aprašymas', 'Kategorijos'],
      rowsData,
    });
  }

  public initialize() {
    const container = document.createElement('div');
    container.className = 'container mt-5';
    container.append(this.productsTable.htmlElement);

    this.htmlElement.append(container);
  }
}

export default App;
