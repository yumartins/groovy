import Link from 'next/link';
import {
  bool,
  string,
  object,
  arrayOf,
} from 'prop-types';

import { H6, P2 } from '../../../components/Title';
import {
  Body,
  Head,
  View,
} from './styles';

const CardHome = ({
  route,
  title,
  children,
  isVertical,
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
  children: arrayOf(object),
  isVertical: bool,
};

CardHome.defaultProps = {
  children: [{}],
  isVertical: false,
};

export default CardHome;
