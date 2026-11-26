import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '../auth/AuthProvider';
import { useEffect } from 'react';
import { getAvatarUrl } from '@/api/getAvatarUrl';

function Header() {

  // routes
  const { user, isAuth, logout } = useAuth();

  const hideWhenLoggedIn = ['로그인', '회원가입'];

  const visibleRoutes = routes.filter(
    ({title})=> !(isAuth && hideWhenLoggedIn.includes(title))
  )

  useEffect(()=>{

    const fetchAvatarUrl = async () => {
      if(user){
        const avatarUrl = await getAvatarUrl(user.id);

        console.log( avatarUrl );
        
      }
    }

    fetchAvatarUrl()


  },[user])


  return (
    <header className={S.header}>
      <h1><img width={100} src="/logo-white.png" alt="" /></h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        {user && <p className={S.greeting}>{user.nickname}님 반갑습니다 😄</p>}
        <ul>
          {
            visibleRoutes.map(({path, title})=>(
              <li key={path}>
                <NavLink
                to={path}
                >{title}</NavLink>
              </li>
            ))
          }
          {
            isAuth && (
              <li>
                <a href="#"
                  onClick={(e)=>{
                    e.preventDefault();
                    if(confirm('너... 진짜 떠날꺼야? 넌 예쁘지 않아 죄를 지었어')){
                      logout()
                    }
                  }}
                >
                  로그아웃
                </a>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header