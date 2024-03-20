import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import axios from 'axios';
import styles from './styles';
import CharacterList from '../../components/characterList/CharacterList';

const EpisodeDetails = ({route}) => {
	const {episodeId} = route.params;
	const [episode, setEpisode] = useState([]);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchEpisodeData = async () => {
			try {
				const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
				setEpisode(response.data);
				setCharacters(response.data.characters);
			} catch (error) {
				console.error('Error fetching episode data hata burda:', error);
			}
		};

		fetchEpisodeData();
	}, [episodeId]);

	return (
		<View style={styles.episodeContainer}>
			<View style={styles.episodeInfo}>
				{/* <Image
					source={{ uri: episode.image }}
					style={styles.episodeImage}
				/> */}
				<Text style={styles.episodeTitle}>{episode.name}</Text>
				<Text style={styles.episodeDescription}>{episode.air_date}</Text>
				<Text style={styles.releaseDate}>{episode.episode}</Text>
			</View>
			<Text style={styles.charactersTitle}>Characters</Text>
			<CharacterList characters={characters} />
		</View>
	);
};

export default EpisodeDetails;
