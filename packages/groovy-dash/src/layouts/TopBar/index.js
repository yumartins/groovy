import { useState } from 'react';

import {
  Item,
  View,
  Navigate,
} from './styles';

const TopBar = () => {
  const [selected, onSelected] = useState(0);

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
    </View>
  );
};

export default TopBar;
