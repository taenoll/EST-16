import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import S from './Alert.module.css';

interface Props {
  open: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  /** 확인 버튼 또는 Esc로 alert이 닫힌 뒤 실행 */
  onClose: () => void;
}

function Alert({ open, title, message, confirmText = '확인', onClose }: Props) {

  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const messageId = useId();

  // showModal()로 열어야 포커스 가두기, Esc 닫기, ::backdrop이 동작한다
  useEffect(() => {
    const dialog = dialogRef.current!;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // body에 그려서 부모 페이지의 중첩 스타일(button, p 등)이 섞이지 않게 한다
  return createPortal(
    <dialog
      ref={dialogRef}
      className={S.alert}
      role="alertdialog"
      aria-labelledby={titleId}
      aria-describedby={message ? messageId : undefined}
      onClose={onClose}
    >
      {/* 로고의 쇼핑백 · 하트 · 반짝임 · 미소 곡선 */}
      <svg className={S.scene} viewBox="0 0 360 200" aria-hidden="true">
        <path className={S.panel} d="M0 0H360V156Q180 212 0 156Z" />
        <path className={S.smile} pathLength={1} d="M0 156Q180 212 360 156" />

        <g className={S.bag}>
          <path
            className={S.body}
            pathLength={1}
            d="M135 144L144 85Q146 72 159 72L203 75Q215 76 217 88L226 141Q228 154 215 155L146 157Q133 157 135 144Z"
          />
          <path className={S.handle} pathLength={1} d="M158 88V62C158 28 204 30 203 64V90" />
        </g>

        <path
          className={S.heart}
          d="M180 138C172 130 160 122 160 111C160 98 176 95 180 106C184 95 200 98 200 111C200 122 188 130 180 138Z"
        />

        <g className={S.sparks}>
          <path pathLength={1} d="M232 60L239 46" />
          <path pathLength={1} d="M242 70L257 60" />
          <path pathLength={1} d="M246 83L263 82" />
        </g>
      </svg>

      <div className={S.content}>
        <h2 id={titleId}>{title}</h2>
        {message && <p id={messageId}>{message}</p>}
        <button type="button" onClick={() => dialogRef.current?.close()}>
          {confirmText}
        </button>
      </div>
    </dialog>,
    document.body
  );
}

export default Alert;
