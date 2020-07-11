import Link from 'next/link';
import {
  func,
  array,
  string,
  object,
  symbol,
  objectOf,
  oneOfType,
} from 'prop-types';

import { H6, P2 } from '../../components/Title';
import {
  Body,
  Head,
  View,
} from './styles';

const CardHome = ({
  route,
  title,
  children,
}) => (
  <View>
    <Head>
      <H6 uppercase>{title}</H6>

      <Link
        href={route}
        passHref
      >
        <P2 as="a">
          See all
        </P2>
      </Link>
    </Head>
    <Body>
      {children}
    </Body>
  </View>
);

CardHome.propTypes = {
  route: string.isRequired,
  title: string.isRequired,
  children: objectOf(oneOfType([
    func, array, object, symbol, string,
  ])),
};

CardHome.defaultProps = {
  children: {},
};

export default CardHome;
