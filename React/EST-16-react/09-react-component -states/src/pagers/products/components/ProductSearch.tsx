import { useId } from 'react';

interface Props {
  onSearch: (userInput: string) => void;
}

function ProductSearch({ onSearch }: Props) {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="ProductSearch">
      <label htmlFor={id}>상품 검색</label>
      <input
        id={id}
        type="search"
        placeholder="상품 이름 입력"
        onChange={handleChange}
      />
    </div>
  );
}

export default ProductSearch;