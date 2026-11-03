// 재사용 가능한 유틸 함수 모음


// DOM 요소 선택 (하나)
export const $ = (selector, context = document) => context.querySelector(selector);


// 연속 호출 시 마지막 호출 후 delay(ms)가 지나야 실행 (검색 입력 등)
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}


// 날짜를 'YYYY-MM-DD' 형식 문자열로 변환
export function formatDate(date = new Date()) {
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}


// 숫자에 천 단위 콤마 추가 (1234567 → '1,234,567')
export const formatNumber = (num) => Number(num).toLocaleString('ko-KR');


// localStorage에 JSON으로 저장 / 불러오기
export const storage = {
  get(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
