import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Products from "@/pages/Products";
import Register from "@/pages/Register";

export const routes = [
  {
    title: '메인',
    path: '/',
    element: <Home />
  },
  {
    title: '상품목록',
    path: '/products',
    element: <Products />
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