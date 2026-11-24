
import { useEffect, useRef, useState } from 'react';
import type { Database } from '@/supabase/database.types';
import S from './Product.module.css';
import gsap from 'gsap';
import supabase from '@/supabase/supabase';

// products 테이블의 한 행에 해당하는 타입
type ProductRow = Database['public']['Tables']['products']['Row'];


function Product() {
  const [products, setProducts] = useState<ProductRow[]>([]);

  const UL = useRef<HTMLUListElement>(null);
  
  // Supabase에서 상품 데이터 가져오기
  useEffect(() => {
    let ignore = false;

    supabase
      .from('products')
      .select('*')
      .then(({ data, error }) => {
        if (ignore) return;

        if (error) {
          console.error('상품 데이터 가져오기 실패', error);
          return;
        }

        setProducts(data ?? []);
      });

    return () => {
      ignore = true;
    };
  }, []);


  // 상품 목록 GSAP 애니메이션
  useEffect(() => {
    if (!UL.current || products.length === 0) return;

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

  return (
    <div className={S.container}>
      <ul ref={UL}>
        {products.map((product) => (
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
