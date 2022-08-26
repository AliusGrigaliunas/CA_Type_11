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

const ALL_CATEGORIES_ID = '-1';
const ALL_CATEGORIES_TITLE = 'Visi produktai';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  private selectedCategoryId: string;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });
    this.htmlElement = foundElement;
    this.productsTable = new Table({
      title: ALL_CATEGORIES_TITLE,
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(formatProductTableRow),
    });
    this.selectedCategoryId = ALL_CATEGORIES_ID;
  }

  private handleCategoryChange = (categoryId: string) => {
    this.selectedCategoryId = categoryId;

    this.update();
  };

  private update = (): void => {
    if (this.selectedCategoryId === ALL_CATEGORIES_ID) {
      this.productsTable.updateProps({
        title: ALL_CATEGORIES_TITLE,
        rowsData: this.productsCollection.all.map(formatProductTableRow),
      });
    } else {
      const categoryTitle = categories
        .find((category) => category.id === this.selectedCategoryId)?.title ?? 'Nėra pavadinimo';

      this.productsTable.updateProps({
        title: categoryTitle,
        rowsData: this.productsCollection.getByCategoryId(this.selectedCategoryId)
          .map(formatProductTableRow),
      });
    }
  };

  public initialize = (): void => {
    const categorySelect = new SelectField({
      label: 'Kategorijos',
      options: [
        { label: ALL_CATEGORIES_TITLE, value: ALL_CATEGORIES_ID },
        ...categories.map((category) => ({
          label: category.title,
          value: category.id,
        })),
      ],
      onChange: this.handleCategoryChange,
    });

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.append(
      categorySelect.htmlElement,
      this.productsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };
}

export default App;
