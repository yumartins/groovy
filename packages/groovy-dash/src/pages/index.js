import { useState, useEffect } from 'react';

import { api } from 'groovy-auth';

import Carousel from '../layouts/Carousel';
import { View } from '../styles/home';

const Dash = () => {
  const [albums, onAlbums] = useState([]);
  const [selectedAlbum, onSelectedAlbum] = useState(0);

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await api.get('/browse/new-releases');

      onAlbums(data.albums.items);
    };

    getAlbums();
  }, []);

  return (
    (
      <View>
        <Carousel
          items={albums}
          selected={selectedAlbum}
          onSelected={onSelectedAlbum}
        />
      </View>
    )
  );
};

export default Dash;
