
import { useState } from "react";
import "./ProductPage.css";
import { productData } from "./data";

import ProductSearch from "./components/ProductSearch";
import StockFilter from "./components/StockFilter";
import ProductList from "./components/ProductList";
import ProductCount from "./components/ProductCount";

function ProductPage() {
  // [상태 선언]
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  // [상태 업데이트]
  const handleSearch = (userInput: string) => setSearchTerm(userInput);

  const handleStockChange = (checked: boolean) => {
    setOnlyInStock(checked);
  };

  // [파생 상태]
  const searchedProductList = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!onlyInStock || product.inStock)
  );

  return (
    <div className="ProductPage">
      <h1>상품 목록</h1>

      <ProductSearch onSearch={handleSearch} />

      <StockFilter
        checked={onlyInStock}
        onStockChange={handleStockChange}
      />

      <ProductList products={searchedProductList} />

      <ProductCount
        totalCount={productData.length}
        displayCount={searchedProductList.length}
      />
    </div>
  );
}

export default ProductPage;
