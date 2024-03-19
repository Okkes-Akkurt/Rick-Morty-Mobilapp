import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import CharacterList from '../../components/characterList/CharacterList';
import styles from './styles';

const episodeImage ='https://a2.tvspielfilm.de/imedia/2744/9012744,b34Y8kPGwmUVDQcGEIcXDrnb9MeSlLMNdDB6LTriKkkE7bcaQlVg3wUCZOWDaQVAx7KGDDsanFkjLYqGucXUYw==.jpg';
const EpisodeDetails = () => {
  return (
		<ScrollView style={styles.episodeContainer}>
			<View style={styles.episodeInfo}>
				<Image
					source={{ uri: episodeImage }}
					style={styles.episodeImage}
				/>
				<Text style={styles.episodeTitle}>Episode name</Text>
				<Text style={styles.episodeDescription}>Episode description</Text>
				<Text style={styles.releaseDate}>Release date</Text>
			</View>
			<Text style={styles.charactersTitle}>Characters</Text>
			<CharacterList />
		</ScrollView>
  );
}

export default EpisodeDetails