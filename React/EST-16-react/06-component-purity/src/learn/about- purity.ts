function truncateText(
  text: string,
  limit: number = 100
): string {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }

  return text;
}


const testText = 'a'.repeat(100);

console.log(truncateText(testText,10));
console.log(truncateText(testText,10));


function square(n: number): number {
  return n * n;
}

console.log(square(4));
console.log(square(5));



function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

const nums = [1, 2, 3];
const nums2 = [1, 2, 3];

console.log(sum(nums)); // 6
console.log(sum(nums2)); // 6



let multiplier = 2;

function multiply(n: number): number {
  return n * multiplier;
}

console.log(multiply(3)); // 6




/*
대표적인 side-effect는 뭐가 있을까?

1. DOM 조작 ( document.getElementById, document.querySelector )

2. 브라우저 API 호출 (setTimeout, setInterval)

3. 로컬 스토리지 접근 / 세션 스토리지 / indexDB / Cookie

4. 콘솔 출력 ( 예외 )

5. 도구 사용 (Redux, zustand를 사용한 외부 접근)

6. 서버 요청 (fetch, Axios)
*/



