import Link from 'next/link';
import { useRouter } from 'next/router';

import Groovy from '../../assets/svgs/logo.svg';
import { H6 } from '../../components/Title';
import routes from './routes';
import {
  Item,
  Logo,
  View,
  Navigate,
  ListItems,
} from './styles';

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <View>
      <Link
        href="/"
        passHref
      >
        <Logo>
          <Groovy />
        </Logo>
      </Link>

      <Navigate>
        {routes.map(({ label, items }) => (
          <ListItems key={label}>
            <H6 uppercase>{label}</H6>

            {items.map(({ icon, name, route }) => (
              <Link
                key={name}
                href={route}
                passHref
              >
                <Item
                  as="a"
                  selected={pathname === route}
                >
                  {icon}
                  {name}
                </Item>
              </Link>
            ))}
          </ListItems>
        ))}
      </Navigate>
    </View>
  );
};

export default Sidebar;
