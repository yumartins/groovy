import Link from 'next/link';
import {
  bool,
  shape,
  string,
  arrayOf,
} from 'prop-types';

import { H5, P2 } from '../../../components/Title';
import View from './styles';

const ItemCard = ({
  id,
  name,
  route,
  icons,
  images,
  categories,
  description,
  isHorizontal,
}) => (
  <Link
    href={`${route}/${id}`}
    passHref
  >
    <View
      isHorizontal={isHorizontal}
      hasCategories={categories.length > 0}
    >
      <img src={isHorizontal ? icons[0]?.url : images[0]?.url} alt="" />
      <div>
        {categories.length > 0 && <li>{categories[0]}</li>}
        <H5>{name}</H5>
        {description && <P2 regular>{description}</P2>}
      </div>
    </View>
  </Link>
);

ItemCard.propTypes = {
  id: string.isRequired,
  name: string,
  route: string,
  icons: arrayOf(shape({
    url: string,
  })),
  images: arrayOf(shape({
    url: string,
  })),
  categories: arrayOf(string),
  description: string,
  isHorizontal: bool,
};

ItemCard.defaultProps = {
  name: '',
  route: '',
  icons: [],
  images: [],
  categories: [],
  description: '',
  isHorizontal: false,
};

export default ItemCard;
