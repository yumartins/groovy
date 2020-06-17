import Link from 'next/link';

import Groovy from '../../assets/svgs/logo.svg';
import routes from './routes';
import {
  Item,
  Logo,
  View,
  Title,
  Items,
  Navigate,
  ListItems,
} from './styles';

const Sidebar = () => (
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
          <Title>{label}</Title>

          <Items>
            {items.map(({ icon, name }) => (
              <Item key={name}>
                {icon}
                {name}
              </Item>
            ))}
          </Items>
        </ListItems>
      ))}
    </Navigate>
  </View>
);

export default Sidebar;
