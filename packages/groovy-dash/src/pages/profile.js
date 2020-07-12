import { useFetch } from 'groovy-hooks';

import { H1, H6, P2 } from '../components/Title';
import { View, Header } from '../styles/profile';

const Profile = () => {
  const { data } = useFetch('/me');

  console.log(data);

  const {
    images,
    product,
    followers,
    display_name,
  } = data && data;

  return (
    <View>
      <Header>
        <img src={images[0].url} alt="" />

        <div>
          <H6 uppercase>{product}</H6>
          <H1>{display_name}</H1>
          <P2>{`${followers.total} followers`}</P2>
        </div>
      </Header>
    </View>
  );
};

export default Profile;
