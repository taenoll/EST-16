
interface Props {
  checked: boolean;
  onStockChange: (checked: boolean) => void;
}

function StockFilter({ checked, onStockChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStockChange(e.target.checked);
  };

  return (
    <div className="StockFilter">
      <input
        type="checkbox"
        id="stock-filter"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="stock-filter">재고 있는 상품만 보기</label>
    </div>
  );
}

export default StockFilter;
