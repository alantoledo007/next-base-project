import styled from 'styled-components';
import {useRouter} from 'next/router';
import Link from 'next/link';

const A = styled.a`
  text-transform: uppercase;
  font-size: 15px;
  margin: 0 10px;
  font-weight: ${({active}) => (active ? 700 : 400)};
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function NavbarLink(props) {
  const {href} = props;
  const router = useRouter();
  return (
    <Link href={href}>
      <A {...props} active={router.pathname === href} />
    </Link>
  );
}
