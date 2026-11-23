
import type { Ref } from "react";

interface Props {
  placeholder: string;
  ref?: Ref<HTMLInputElement>;
}

function Child({ placeholder, ref }: Props) {
  return (
    <input ref={ref} placeholder={placeholder} type="text" />
  );
}

export default Child;
