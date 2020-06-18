import { useRef, useState } from 'react';

import Input from '../../components/Input';
import {
  Item,
  View,
  Form,
  Navigate,
} from './styles';

const TopBar = () => {
  const [selected, onSelected] = useState(0);

  const ref = useRef(null);

  const items = [
    'Music',
    'Podcast',
    'Live',
  ];

  return (
    <View>
      <Navigate>
        {items.map((item, index) => (
          <Item
            key={item}
            onClick={() => onSelected(index)}
            selected={selected === index}
          >
            {item}
          </Item>
        ))}
      </Navigate>

      <Form ref={ref}>
        <Input
          name="search"
          label="Type to here for search"
          hasIcon
          isSearch
        />
      </Form>
    </View>
  );
};

export default TopBar;
