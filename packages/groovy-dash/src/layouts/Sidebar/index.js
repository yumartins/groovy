import Link from 'next/link';
import { useRouter } from 'next/router';
import { func, bool } from 'prop-types';

import GroovyMinify from '../../assets/svgs/logo-minify.svg';
import Groovy from '../../assets/svgs/logo.svg';
import { H6, P2 } from '../../components/Title';
import routes from './routes';
import {
  Item,
  Logo,
  View,
  Navigate,
  Minimize,
  ListItems,
} from './styles';

const Sidebar = ({
  minimize,
  onMinimize,
}) => {
  const { pathname } = useRouter();

  return (
    <View minimize={minimize}>
      <Link
        href="/"
        passHref
      >
        <Logo>
          {minimize
            ? <GroovyMinify />
            : <Groovy />}
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
                  <P2>{name}</P2>
                </Item>
              </Link>
            ))}
          </ListItems>
        ))}
      </Navigate>

      <Minimize
        type="button"
        onClick={() => onMinimize(! minimize)}
      >
        Minimize
      </Minimize>
    </View>
  );
};

Sidebar.propTypes = {
  minimize: bool,
  onMinimize: func,
};

Sidebar.defaultProps = {
  minimize: false,
  onMinimize: () => {},
};

export default Sidebar;
