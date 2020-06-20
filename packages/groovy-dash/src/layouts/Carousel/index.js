import {
  func,
  number,
  object,
  arrayOf,
} from 'prop-types';

import { H1 } from '../../components/Title';
import {
  View,
  Image,
  Title,
  Items,
  Bullet,
  Content,
  Bullets,
} from './styles';

const Carousel = ({
  items,
  selected,
  onSelected,
}) => (
  <View>
    <Title>Trending New Hits</Title>

    {items && items.slice(0, 5).map(({
      id,
      name,
      images,
      artists,
    }, index) => (
      <Items
        key={id}
        selected={selected === index}
        data-active={index === selected}
      >
        <Content>
          <span>{artists && artists[0].name}</span>
          <H1>{name}</H1>
        </Content>

        <Image src={images && images[0].url} alt="" />
      </Items>
    ))}

    <Bullets>
      {items && items.slice(0, 5).map((item, index) => (
        <Bullet
          key={item.id}
          aria-label="bullet"
          type="button"
          onClick={() => onSelected(index)}
          selected={selected === index}
          data-active={index === selected}
        />
      ))}
    </Bullets>
  </View>
);

Carousel.propTypes = {
  items: arrayOf(object),
  selected: number,
  onSelected: func,
};

Carousel.defaultProps = {
  items: [{}],
  selected: 0,
  onSelected: () => {},
};

export default Carousel;
