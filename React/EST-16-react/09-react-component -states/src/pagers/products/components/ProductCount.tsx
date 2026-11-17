
interface Props {
  totalCount: number;
  displayCount: number;
}

function ProductCount({ totalCount, displayCount }: Props) {
  return (
    <p className="ProductCount">
      전체 <b>{totalCount}</b>개 중 <b>{displayCount}</b>개 표시
    </p>
  );
}

export default ProductCount;
