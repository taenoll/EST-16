import S from './Register.module.css';

function Register() {
  return (
    <div className={S.container}>
      <form>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor='a-10'>이메일</label>
          <input type="email" required id="a-10"/>
        </div>
        <div>
          <label htmlFor='a-20'>비밀번호</label>
          <input type="password" required id="a-20"/>
        </div>
        <div>
          <label htmlFor='a-30'>비밀번호 확인</label>
          <input type="password" required id="a-30"/>
        </div>
        <div>
          <label htmlFor='a-40'>닉네임</label>
          <input type="text" required id="a-40"/>
        </div>
        <div>
          <label htmlFor='a-50'>프로필 이미지</label>
          <input type="file" accept='image/*' id="a-50"/>
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  )
}
export default Register