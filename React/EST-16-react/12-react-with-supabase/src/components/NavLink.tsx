
interface Props {
  to: string;
  children: React.ReactNode
}

function NavLink({to, children}: Props) {

  const handleLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

  }

  return (
    <a href={to} onClick={handleLink}>{children}</a>
  )
}

export default NavLink
