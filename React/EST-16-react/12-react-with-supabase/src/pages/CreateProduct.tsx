
import S from './CreateProduct.module.css';

function CreateProduct() {
  return (
    <div className={S.container}>
      <h2>상품 등록</h2>
      <form>
        <div>
          <label>상품명</label>
          <input type="text" required />
        </div>
        <div>
          <label>설명</label>
          <textarea></textarea>
        </div>
        <div>
          <label>가격</label>
          <input type="text" required />
        </div>
        <div>
          <label>할인율 (%)</label>
          <input type="text" />
        </div>
        <div>
          <label>상품 이미지</label>
          <input type="file" accept="image/*" />
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
