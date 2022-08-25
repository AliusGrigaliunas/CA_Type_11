import ProductsCollection from '../helpers/products-collection';
import products from '../data/products';
import initCategories from '../data/categories';
import productsCategories from '../data/products-categories';
import Table from './table';
import stringifyPropValues from '../helpers/stringify-prop-values';
import ProductJoined from '../types/product-joined';

type ProductTableRow = [string, string, string, string, string];

const formatProductTableRow = (product: ProductJoined): ProductTableRow => {
  const {
    id,
    title,
    price,
    description,
    categories,
  } = stringifyPropValues(product);

  return [
    id,
    title,
    price,
    description ?? '',
    categories,
  ];
};

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

    this.productsTable = new Table({
      title: 'Visi produktai',
      columns: ['Id', 'Pavadinimas', 'Kaina', 'Aprašymas', 'Kategorijos'],
      rowsData: this.productsCollection.all.map(formatProductTableRow),
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
