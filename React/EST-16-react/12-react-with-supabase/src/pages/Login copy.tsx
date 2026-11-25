
import { useId, useState } from 'react';
import S from './Login.module.css';
import supabase from '@/supabase/supabase';

function Login() {
  const userId = useId();
  const pwId = useId();

  // 1. 상태 설정하기
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // 2. 이벤트 바인딩하기
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);

    // 3. supabase 통신하기
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (loginError) {
      console.error('로그인 실패:', loginError);
      setError(loginError.message);
      return;
    }

    console.log('로그인 성공');
    console.log(data.user);

    // 4. redirect 하기 (추후 구현)
  };

  return (
    <div className={S.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input
              id={userId}
              type="email"
              name="email"
              required
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호:</label>
            <input
              id={pwId}
              type="password"
              name="password"
              required
              aria-required="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">로그인</button>

          {error && (
            <p style={{ color: 'red', marginTop: '1rem' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
