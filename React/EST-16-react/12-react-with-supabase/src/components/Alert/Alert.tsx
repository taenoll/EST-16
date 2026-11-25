import { useEffect, useId, useRef, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import AlertScene from './AlertScene';
import S from './Alert.module.css';

interface Props {
  open: boolean;
  title: string;
  /** 줄바꿈은 \n */
  message?: string;
  confirmText?: string;
  /** 확인 버튼 또는 Esc로 닫힌 뒤 실행. 여기서 open을 false로 되돌려야 다시 열 수 있다 */
  onClose: () => void;
}

function Alert({ open, title, message, confirmText = '확인', onClose }: Props) {

  const dialogRef = useRef<HTMLDialogElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const messageId = useId();

  // showModal()로 열어야 뒤쪽 페이지 차단, Esc 닫기, ::backdrop이 동작한다
  // 열리면 확인 버튼에 포커스가 가고, 닫히면 원래 있던 요소로 돌아간다
  useEffect(() => {
    const dialog = dialogRef.current!;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // 포커스할 요소가 확인 버튼 하나뿐이라 Tab을 눌러도 주소창으로 빠지지 않고 버튼에 머문다
  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== 'Tab') return;

    e.preventDefault();
    confirmRef.current?.focus();
  };

  // body에 그려서 부모 페이지의 중첩 스타일(button, p 등)이 섞이지 않게 한다
  return createPortal(
    <dialog
      ref={dialogRef}
      className={S.alert}
      role="alertdialog"
      aria-labelledby={titleId}
      aria-describedby={message ? messageId : undefined}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    >
      <AlertScene />

      <div className={S.content}>
        <h2 id={titleId} className={S.title}>{title}</h2>
        {message && <p id={messageId} className={S.message}>{message}</p>}
        <button
          ref={confirmRef}
          type="button"
          className={S.confirm}
          onClick={() => dialogRef.current?.close()}
        >
          {confirmText}
        </button>
      </div>
    </dialog>,
    document.body
  );
}

export default Alert;
