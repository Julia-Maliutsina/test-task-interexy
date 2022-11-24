import React, { FC } from 'react';

import { CharacterInfo } from 'components/Character';
import { ICharacter } from 'interfaces/Character';
import Loader from 'components/Loader';

import Layout from '../../components/Layout';
import './style.scss';
interface ICharacterProps {
  character: ICharacter;
  isLoading?: Boolean;
}

const CharacterPage: FC<ICharacterProps> = ({ character, isLoading }) => {
  return (
    <Layout pageName="character">
      {isLoading ? (
        <Loader />
      ) : (
        character && (
          <CharacterInfo
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            origin={character.origin}
            location={character.location}
            image={character.image}
          />
        )
      )}
    </Layout>
  );
};

export default CharacterPage;
