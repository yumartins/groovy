import { useState } from 'react';

import { useFetch } from 'groovy-hooks';
import Link from 'next/link';

import { H5, P2 } from '../components/Title';
import Card from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import Slider from '../layouts/Home/Card';
import {
  List,
  View,
  Genres,
  Artists,
  Playlists,
  ListTrack,
  ListAlbums,
  ListAlbumsBottom,
} from '../styles/home';

const Dash = () => {
  const [selectedAlbum, onSelectedAlbum] = useState(0);

  const COUNTRY = 'BR';

  const { data: _albums } = useFetch(`/browse/new-releases?country=${COUNTRY}`);
  const { data: _genres } = useFetch(`/browse/categories?country=${COUNTRY}`);
  const { data: _playlists } = useFetch(`/browse/featured-playlists?country=${COUNTRY}&limit=12`);

  const albums = _albums ? _albums.albums.items : [];
  const genres = _genres ? _genres.categories.items : [];
  const playlists = _playlists || {};

  const listAlbums = albums && albums.slice(0, 5).map((album) => album.artists[0].id).toString();

  const { data: _artists } = useFetch(`/artists?ids=${listAlbums && listAlbums}`);

  const artists = _artists ? _artists.artists : [];

  return (
    <View>
      <Carousel
        items={albums.length > 0 && albums}
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
              {artists.length > 0
                && artists.map(({
                  id,
                  name,
                  genres: categories,
                  images,
                }) => (
                    <Link
                      key={id}
                      href={`/artists/${id}`}
                    >
                      <a>
                        <img src={images[0].url} alt="" />
                        <span>{categories[0]}</span>
                        <H5>{name}</H5>
                      </a>
                    </Link>
                  ))}
            </Artists>
          </Card>

          <ListAlbumsBottom>
            <Slider
              route="/playlists"
              title="Top Playlists"
              items={playlists?.playlists?.items}
              slidesPerPage={2}
            />

            <Card
              title="Genres"
              route="/genres"
            >
              <Genres>
                {genres.length > 0
                  && genres.slice(0, 4).map(({ id, name, icons }) => (
                    <Link
                      key={id}
                      href={`/genres/${id}`}
                    >
                      <a>
                        <img src={icons[0].url} alt="" />
                        <H5>{name}</H5>
                      </a>
                    </Link>
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
