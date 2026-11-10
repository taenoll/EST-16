import reactLogo from '@/assets/react.svg';

export interface Profile {
  name: string;
  nickname: string;
  birthYear: number;
  avatar: string;
  github: string;
  themeColor: string;
  job: {
    title: string;
    company: string;
  };
  skills: string[];
  isOpenToWork: boolean;
}

export const profile: Profile = {
  name: '이유정',
  nickname: 'react-lee',
  birthYear: 2024,
  avatar: reactLogo,
  github: 'https://github.com/taenoll',
  themeColor: '#61dafb',
  job: {
    title: '프론트엔드 개발자',
    company: '이스트소프트',
  },
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  isOpenToWork: true,
};

export const todayQuotes: string[] = [
  '🌱 절대 지지 않을 거야!',
  '🔥 저에 대한 객관적인 비평 또는 피드백 그런 거 원하지 않습니다 무조건 박수갈채. 일방적이고 편향적인 칭찬 부탁드립니다.',
  '☕️ 책에서 봤어! 역경!',
  '🚀 어떻게든 되어라~!',
];