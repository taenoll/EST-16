import "./ProductPage.css";
import { productData } from "./data";

import ProductSearch from "./components/ProductSearch";
import StockFilter from "./components/StockFilter";
import ProductList from "./components/ProductList";
import ProductCount from "./components/ProductCount";

function ProductPage() {

  // [상태 선언]
  const [searchTerm, setSearchTerm] = useState('');

  // [상태 업데이트]
  const handleSearch = (userInput: string) => setSearchTerm(userInput);

  // [파생 상태]
  const searchedProductList = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ProductPage">
      <h1>상품 목록</h1>

      <ProductSearch onSearch={handleSearch} />
      <ProductList products={searchedProductList} />

      <StockFilter />

      <ProductList products={productData} />

      <ProductCount />

    </div>
  );
}

export default ProductPage;