import React from 'react'
import { Image, Text, View } from 'react-native';
import CharacterList from '../../components/episodeDetail/CharacterList';


const EpisodeDetails = () => {
  return (
		<View>
			<View>
				<Image />
				<Text>Episode name</Text>
				<Text>Episode</Text>
				<Text>Release date</Text>
			</View>
              <Text>Characters</Text>
                <CharacterList />
		</View>
  );
}

export default EpisodeDetails