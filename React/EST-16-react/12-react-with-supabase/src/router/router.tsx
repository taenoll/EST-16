import CreateProduct from "@/pages/CreateProduct";
import ProductDetail from "@/pages/ProductDetail";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/Products";
import Register from "@/pages/Register";

export const routes = [
  {
    title: '메인',
    path: '/',
    element: <Home />
  },
  {
    title: '상품등록',
    path: '/Create',
    element: <CreateProduct />
  },
  {
    title: '상품상세',
    path: '/Product/:id',
    element: <ProductDetail />
  },
  {
    title: '상품목록',
    path: '/Product',
    element: <Product />
  },
  
  {
    title: '고객지원',
    path: '/contact',
    element: <div>CONTACT</div>
  },
  {
    title: '로그인',
    path: '/login',
    element: <Login />
  },
  {
    title: '회원가입',
    path: '/register',
    element: <Register />
  },
]