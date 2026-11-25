
import { useEffect, useRef } from 'react';
import S from './Product.module.css';
import gsap from 'gsap';
import useProducts from '@/hook/useProduct';

function Product() {
  // 커스텀 훅에서 상품 데이터와 로딩 상태 가져오기
  const { products, loading } = useProducts();

  const UL = useRef<HTMLUListElement>(null);

  // 상품 목록 GSAP 애니메이션
  useEffect(() => {
    if (!UL.current || !products?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        UL.current!.children,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1
        }
      );
    });

    return () => ctx.revert();
  }, [products]);

  if (loading) {
    return <div className={S.container}>로딩 중...</div>;
  }

  return (
    <div className={S.container}>
      <ul ref={UL}>
        {products?.map((product) => (
          <li key={product.id}>
            <a href="/">
              <figure>
                <img
                  src={product.image_url ?? ''}
                  alt={product.name ?? '상품 이미지'}
                />
              </figure>
              <span className={S.brand}>
                {product.name}
              </span>
              <span className={S.description}>
                {product.description}
              </span>
              <span className={S.price}>
                {product.price?.toLocaleString()}원
              </span>
              <div>
                <span className={S.discount}>
                  {product.sale ?? 0}%
                </span>
                <span className={S.realPrice}>
                  {product.price == null
                    ? '-'
                    : Math.round(
                        product.price * (1 - (product.sale ?? 0) / 100)
                      ).toLocaleString()
                  }원
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
