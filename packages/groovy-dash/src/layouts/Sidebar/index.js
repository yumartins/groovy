import Link from 'next/link';
import { useRouter } from 'next/router';

import Groovy from '../../assets/svgs/logo.svg';
import routes from './routes';
import {
  Item,
  Logo,
  View,
  Navigate,
  ListItems,
  ListTitle,
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
            <ListTitle>{label}</ListTitle>

            {items.map(({ icon, name, route }) => (
              <Link
                key={name}
                href={route}
                passHref
              >
                <Item selected={pathname === route}>
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
