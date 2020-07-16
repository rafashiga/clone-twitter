import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Follwage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Rafael</h1>
        <h2>@rafael</h2>

        <p>
          Developer at <a href="#">@Company</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de janeiro de 1900
          </li>
        </ul>

        <Follwage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>512</strong> seguidores
          </span>
        </Follwage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
