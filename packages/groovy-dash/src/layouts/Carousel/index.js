import {
  func,
  number,
  object,
  arrayOf,
} from 'prop-types';

import {
  View,
  Image,
  Title,
  Items,
  Content,
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
          <h1>{name}</h1>
        </Content>

        <Image src={images && images[0].url} alt="" />
      </Items>
    ))}
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
