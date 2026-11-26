import { useEffect } from 'react';
import { useParams } from '@/router/RouterProvider';
import supabase from '@/supabase/supabase';

function ProductDetail() {
  const { id } = useParams();

  useEffect(() => {
    // 비동기 함수 만들기
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      console.log(data, error);
    };

    // 비동기 함수 실행
    fetchProduct();

  }, [id]);

  return (
    <div>ProductDetail: {id}</div>
  );
}

export default ProductDetail;