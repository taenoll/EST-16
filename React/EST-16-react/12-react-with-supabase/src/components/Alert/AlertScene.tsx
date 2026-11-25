import type { CSSProperties } from 'react';
import S from './AlertScene.module.css';

interface Motion {
  delay: number; // 초
  duration: number; // 초
  count?: number; // 반복 횟수 (기본 1)
}

/* 애니메이션 시간은 전부 여기서 조절한다 */
const SPEED = 1; // 전체 배속 (2면 두 배 빠르게)

const MOTION = {
  smile: { delay: 0.1, duration: 0.9 },
  body: { delay: 0.15, duration: 0.6 },
  handle: { delay: 0.45, duration: 0.45 },
  drop: { delay: 0.7, duration: 0.5 },
  squash: { delay: 1, duration: 0.45 },
  spark: { delay: 1.15, duration: 0.35 },
  // 무한 반복 금지: 움직임은 5초 안에 끝나야 한다 (WCAG 2.2.2)
  beat: { delay: 1.9, duration: 1.4, count: 2 },
} satisfies Record<string, Motion>;

const SPARK_GAP = 0.06; // 반짝임 사이 간격 (초)

/* 그림 좌표 (viewBox 0 0 360 200) */
const SHAPE = {
  panel: 'M0 0H360V156Q180 212 0 156Z',
  smile: 'M0 156Q180 212 360 156',
  body: 'M135 144L144 85Q146 72 159 72L203 75Q215 76 217 88L226 141Q228 154 215 155L146 157Q133 157 135 144Z',
  handle: 'M158 88V62C158 28 204 30 203 64V90',
  heart: 'M180 138C172 130 160 122 160 111C160 98 176 95 180 106C184 95 200 98 200 111C200 122 188 130 180 138Z',
  sparks: ['M232 60L239 46', 'M242 70L257 60', 'M246 83L263 82'],
};

// 시간 값을 CSS 변수로 넘긴다
const play = ({ delay, duration, count = 1 }: Motion) =>
  ({
    '--delay': `${delay / SPEED}s`,
    '--duration': `${duration / SPEED}s`,
    '--count': count,
  }) as CSSProperties;

// pathLength={1}이면 실제 길이와 상관없이 0~1로 선을 그릴 수 있다
function DrawnLine({ d, motion, className = '' }: { d: string; motion: Motion; className?: string }) {
  return <path className={`${S.draw} ${className}`.trim()} style={play(motion)} pathLength={1} d={d} />;
}

/** 로고의 쇼핑백 · 하트 · 반짝임 · 미소 곡선 (장식용이라 스크린 리더는 읽지 않는다) */
function AlertScene() {
  return (
    <svg className={S.scene} viewBox="0 0 360 200" aria-hidden="true" focusable="false">
      <path className={S.panel} d={SHAPE.panel} />
      <DrawnLine className={S.smile} d={SHAPE.smile} motion={MOTION.smile} />

      <g className={S.squash} style={play(MOTION.squash)}>
        <DrawnLine d={SHAPE.body} motion={MOTION.body} />
        <DrawnLine d={SHAPE.handle} motion={MOTION.handle} />
      </g>

      <g className={S.drop} style={play(MOTION.drop)}>
        <path className={S.beat} style={play(MOTION.beat)} d={SHAPE.heart} />
      </g>

      {SHAPE.sparks.map((d, index) => (
        <DrawnLine
          key={d}
          d={d}
          motion={{ ...MOTION.spark, delay: MOTION.spark.delay + index * SPARK_GAP }}
        />
      ))}
    </svg>
  );
}

export default AlertScene;
