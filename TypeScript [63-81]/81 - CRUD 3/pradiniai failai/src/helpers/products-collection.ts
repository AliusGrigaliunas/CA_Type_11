import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

type ProductsCollectionProps = {
  products: Product[]
  categories: Category[]
  productsCategories: ProductCategory[]
};

class ProductsCollection {
  private props: ProductsCollectionProps;

  public constructor(props: ProductsCollectionProps) {
    this.props = JSON.parse(JSON.stringify(props));
  }

  private joinProduct = (product: Product) => {
    const { categories, productsCategories } = this.props;

    const productCategoriesIds = productsCategories
      .filter((pc) => pc.productId === product.id)
      .map((pc) => pc.categoryId);

    const productCategoriesTitles = categories
      .filter((category) => productCategoriesIds.includes(category.id))
      .map((category) => category.title);

    return {
      ...product,
      categories: productCategoriesTitles.join(', '),
    };
  };

  public get all(): ProductJoined[] {
    return this.props.products.map(this.joinProduct);
  }

  public getByCategoryId = (categoryId: string): ProductJoined[] => {
    /*
     TODO: peržiūrėkite schemą 'product-category-entity-relation.png' ir naudojant
     TODO: 'categoryId' grąžinkite tik atitinkamos kategorijos APJUNGTUS produktus
     */
  };
}

export default ProductsCollection;
