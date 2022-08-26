import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import ProductJoined from '../types/product-joined';
import SelectField from './select-field';

type ProductTableRow = Required<StringifiedObject<ProductJoined>>;

const formatProductTableRow = (product: ProductJoined): ProductTableRow => ({
  ...stringifyProps(product),
  description: product.description ?? '',
});

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const productsTable = new Table({
      title: 'Visi produktai',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(formatProductTableRow),
    });

    const categorySelect = new SelectField({
      label: 'Miestas',
      options: [
        { label: 'Vilnius', value: 'vln' },
        { label: 'Kaunas', value: 'kns' },
        { label: 'Klaipėda', value: 'klp' },
        { label: 'Šiauliai', value: 'sia' },
      ],
    });

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.append(
      categorySelect.htmlElement,
      productsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };
}

export default App;
