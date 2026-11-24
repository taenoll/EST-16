
import S from './Header.module.css';

function Header() {
  return (
    <header className={S.header}>
      <h1>호롤리</h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul>
          <li><a href="/">메인</a></li>
          <li><a href="/products">상품목록</a></li>
          <li><a href="/contact">고객지원</a></li>
          <li><a href="/login">로그인</a></li>
          <li><a href="/register">회원가입</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
