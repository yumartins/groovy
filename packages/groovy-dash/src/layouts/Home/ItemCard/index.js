import Link from 'next/link';

import { H5, P2 } from '../../../components/Title';
import View from './styles';

const ItemCard = ({
  id,
  name,
  route,
  images,
  genres,
  description,
}) => (
  <Link
    href={`${route}/${id}`}
    passHref
  >
    <View>
      <img src={images[0]?.url} alt="" />
      <div>
        <H5>{name}</H5>
        {genres && <span>{genres[0]}</span>}
        {description && <P2 regular>{description}</P2>}
      </div>
    </View>
  </Link>
);

export default ItemCard;
