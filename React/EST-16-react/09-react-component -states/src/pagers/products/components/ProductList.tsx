import type { Product } from '../types/Product';

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <ul className="ProductList">
      {products.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong>
          <span className="price">
            {product.price.toLocaleString()}원
          </span>
          <span className="badge">
            {product.inStock ? '재고 있음' : '품절'}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;