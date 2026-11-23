interface Props {
  message: string;
}

function Child({ message }: Props) {
  return (
    <p>{message}</p>
  );
}

export default Child;