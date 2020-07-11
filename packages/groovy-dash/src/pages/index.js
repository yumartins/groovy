import { useState } from 'react';

import { useFetch } from 'groovy-hooks';
import Link from 'next/link';

import Loading from '../components/Loading';
import { H5, P2 } from '../components/Title';
import Card from '../layouts/Card';
import Carousel from '../layouts/Carousel';
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

  console.log(genres);

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
                  <Link
                    key={id}
                    href={`/playlists/${id}`}
                  >
                    <a>
                      <img src={images[0].url} alt="" />
                      <H5>{name}</H5>
                      <P2>{description}</P2>
                    </a>
                  </Link>
                ))}
              </Playlists>
            </Card>

            <Card
              title="Genres"
              route="/genres"
            >
              <Genres>
                {genres.map(({ id, name, icons }) => (
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
