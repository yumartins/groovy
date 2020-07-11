import { useState } from 'react';

import { useFetch } from 'groovy-hooks';

import Loading from '../components/Loading';
import Card from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import ItemCard from '../layouts/Home/ItemCard';
import {
  List,
  View,
  Genres,
  Artists,
  Playlists,
  ListTrack,
  ListAlbums,
  ViewIsLoading,
  ListAlbumsBottom,
} from '../styles/home';

const Dash = () => {
  const [selectedAlbum, onSelectedAlbum] = useState(0);

  const COUNTRY = 'BR';

  const { data: _albums } = useFetch(`/browse/new-releases?country=${COUNTRY}&limit=5`);
  const { data: _genres } = useFetch(`/browse/categories?country=${COUNTRY}&limit=4`);
  const { data: _playlists } = useFetch(`/browse/featured-playlists?country=${COUNTRY}&limit=2`);

  const albums = _albums ? _albums.albums.items : [];
  const genres = _genres ? _genres.categories.items : [];
  const playlists = _playlists ? _playlists.playlists.items : [];

  const listAlbums = albums && albums.map((album) => album.artists[0].id).toString();

  const { data: _artists } = useFetch(`/artists?ids=${listAlbums && listAlbums}`);

  const artists = _artists ? _artists.artists : [];

  if (albums.length <= 0
    || genres.length <= 0
    || playlists.length <= 0
    || artists.length <= 0) {
    return (
      <ViewIsLoading>
        <Loading />
      </ViewIsLoading>
    );
  }

  return (
    <View>
      <Carousel
        items={albums}
        selected={selectedAlbum}
        onSelected={onSelectedAlbum}
      />

      <List>
        <ListAlbums>
          <Card
            title="Top Artists"
            route="/artists"
          >
            <Artists
              title="Top Artists"
              route="/artists"
            >
              {artists.map(({
                id,
                name,
                genres: categories,
                images,
              }) => (
                <ItemCard
                  id={id}
                  key={id}
                  name={name}
                  route="/artists"
                  images={images}
                  categories={categories}
                />
              ))}
            </Artists>
          </Card>

          <ListAlbumsBottom>
            <Card
              title="Playlists"
              route="/playlists"
            >
              <Playlists>
                {playlists.map(({
                  id,
                  name,
                  images,
                  description,
                }) => (
                  <ItemCard
                    id={id}
                    key={id}
                    name={name}
                    route="/playlists"
                    images={images}
                    description={description}
                  />
                ))}
              </Playlists>
            </Card>

            <Card
              title="Genres"
              route="/genres"
            >
              <Genres>
                {genres.map(({ id, name, icons }) => (
                  <ItemCard
                    id={id}
                    key={id}
                    name={name}
                    icons={icons}
                    route="/genres"
                    isHorizontal
                  />
                ))}
              </Genres>
            </Card>
          </ListAlbumsBottom>
        </ListAlbums>

        <ListTrack>
          <Card
            title="Player"
            route="/player"
          >
            <div style={{ height: '700px' }} />
          </Card>
        </ListTrack>
      </List>
    </View>
  );
};

export default Dash;
