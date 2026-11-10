
import type { JSX } from 'react';
import { profile, todayQuotes } from './data';
import { getRandom } from '@/utils/getRandom';
import './profileCard.css';

function ProfileCard(): JSX.Element {
  const { name, nickname, birthYear, avatar, github, themeColor, job, skills, isOpenToWork, } = profile;

  // TODO 2. 나이 계산
  const age = new Date().getFullYear() - birthYear;

  // TODO 3. 무작위 문구 선택
  const quote = todayQuotes[getRandom(todayQuotes.length)];

  return (
    <article className="profileCard" style={{ borderColor: themeColor }} >
      {/* TODO 5. 이미지 속성 바인딩 */}
      <img className="avatar" src={avatar} alt={`${name} 프로필 사진`} />

      {/* TODO 6. 이름과 닉네임 */}
      <h2> {name}{' '}<small>@{nickname}</small> </h2>

      {/* TODO 7. 중첩 객체 바인딩 */}
      <p className="job"> {job.title} · {job.company} </p>

      <dl className="info">
        <div>
          <dt>나이</dt>
          {/* TODO 8. 표현식 바인딩 */}
          <dd>{age}세</dd>
        </div>

        <div>
          <dt>GitHub</dt>
          {/* TODO 9. 링크 속성 바인딩 */}
          <dd>
            <a href={github} target="_blank" rel="noopener noreferrer" > {github} </a>
          </dd>
        </div>

        <div>
          <dt>기술 스택</dt>
          {/* TODO 10. 배열 메서드 결과 바인딩 */}
          <dd> {skills.join(' 🌟 ')} ({skills.length}개) </dd>
        </div>

        <div>
          <dt>구직 중</dt>
          {/* TODO 11. 불리언 값 출력 */}
          <dd>{isOpenToWork ? 'yes' : 'no'}</dd>
        </div>
      </dl>

      {/* TODO 12. 오늘의 한마디 */}
      <blockquote className="quote">{quote}</blockquote>
    </article>
  );
}

export default ProfileCard;
