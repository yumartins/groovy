import Link from 'next/link';
import { bool, number, string } from 'prop-types';

import { H5, P2 } from '../../../components/Title';
import View from './styles';

const ItemCard = ({
  id,
  name,
  route,
  icons,
  images,
  genres,
  categories,
  description,
  isHorizontal,
}) => (
  <Link
    href={`${route}/${id}`}
    passHref
  >
    <View isHorizontal={isHorizontal}>
      <img src={isHorizontal ? icons[0]?.url : images[0]?.url} alt="" />
      <div>
        {categories && <li>{categories[0]}</li>}
        <H5>{name}</H5>
        {genres && <span>{genres[0]}</span>}
        {description && <P2 regular>{description}</P2>}
      </div>
    </View>
  </Link>
);

ItemCard.propTypes = {
  id: number.isRequired,
  name: string,
  route: string,
  description: string,
  isHorizontal: bool,
};

ItemCard.defaultProps = {
  name: '',
  route: '',
  description: '',
  isHorizontal: false,
};

export default ItemCard;
