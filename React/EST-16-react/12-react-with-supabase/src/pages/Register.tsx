import { useId, useState } from 'react';
import S from './Register.module.css';
import supabase from '@/supabase/supabase';
import Alert from '@/components/Alert/Alert';

function Register() {

  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const nickId = useId();
  const avatarId = useId();

  // controlled component  state가 value에 연결 + onChange로 state 제어
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);

    if(password !== passwordConfirm){
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError || !user) {
      console.log(signUpError);
      setError(signUpError?.message || '회원가입에 실패했습니다.');
      return;
    }


    
    const userId = user.id;

    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${userId}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, avatarFile, {
          upsert: true, // 덮어쓰기 OK
        });

      if (uploadError) {
        console.log(uploadError);
        setError('이미지 업로드에 실패했습니다.');
        return;
      }
    }

    setIsRegistered(true);

    // alert('회원가입 완료!');
    // history.pushState(null, '', '/login');
    // location.reload();


    



  }

  const handleAlertClose = () => {
    setIsRegistered(false);
    history.pushState(null, '', '/login');
    location.reload();
  }

  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input 
            type="email" 
            required 
            id={emailId}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input 
            type="password" 
            required 
            id={pwId}
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input 
            type="password" 
            required 
            id={pwConfirmId}
            value={passwordConfirm}
            onChange={(e)=> setPasswordConfirm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={nickId}>닉네임</label>
          <input 
            type="text" 
            required 
            id={nickId}
            value={nickname}
            onChange={(e)=> setNickname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={avatarId}>프로필 이미지</label>
          <input 
            type="file" 
            accept='image/*' 
            id={avatarId}
            onChange={(e)=>{
              const file = e.target.files?.[0] ?? null;
              setAvatarFile(file);
              
              if(file){
                const reader = new FileReader();

                reader.onloadend = () => {
                  setAvatarPreview(reader.result as string);
                }
                reader.readAsDataURL(file);
              }else{
                setAvatarPreview(null);
              }
            }}
          />
          {
            avatarPreview && (
              <div className={S.preview}>
                <img src={avatarPreview} alt="avatar preview" />
              </div>
            )
          }
        </div>
        <button type="submit">가입하기</button>
        {error && ( <p role="alert" style={{color:'#c62828',marginTop:'1rem'}}>{error}</p> )}
      </form>

      <Alert
        open={isRegistered}
        title={`${nickname}님, 환영해요!`}
        message={'회원가입이 완료됐어요.\n로그인하고 쇼핑을 시작해 보세요.'}
        confirmText="로그인하러 가기"
        onClose={handleAlertClose}
      />
    </div>
  )
}
export default Register