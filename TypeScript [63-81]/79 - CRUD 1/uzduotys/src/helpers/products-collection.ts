import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';

class ProductsCollection {
  constructor(
    private products: Product[],
    private categories: Category[],
    private productCategories: ProductCategory[],
  ) { }

  private joinProduct(product: Product): ProductJoined {

  }
}

export default ProductsCollection;
