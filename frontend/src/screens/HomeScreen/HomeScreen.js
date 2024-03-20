import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import styles from './styles';
import EpisodeList from '../../components/home/EpisodeList';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/favoriteSlice';
import { setSearchTerm } from '../../redux/searchSlice';
import { storeData } from '../../utils/storage';

const image = { uri: 'https://www.moviementarios.com/wp-content/uploads/2019/11/5dc14d58a34f2_thumbnail-896x500.jpg' };

function HomeScreen() {
	const [selectedSeason, setSelectedSeason] = useState('');
	const [seasons, setSeasons] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [filteredEpisodes, setFilteredEpisodes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const favoriteCharacters = useSelector((state) => state.favorite.characters);

	useEffect(() => {
		const fetchSeasons = async () => {
			try {
				const allSeasons = Array.from({ length: 7 }, (_, i) => `Season ${i + 1}`);
				setSeasons(allSeasons);
			} catch (error) {
				console.error('Error fetching seasons:', error);
			}
		};

		fetchSeasons();
	}, []);

	useEffect(() => {
		const fetchEpisodesBySeason = async () => {
			try {
				if (selectedSeason) {
					const seasonNumber = parseInt(selectedSeason.replace('Season ', ''));
					const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${seasonNumber}`);
					setEpisodes(response.data.results);
					setFilteredEpisodes(response.data.results);
					setIsLoading(false);
				}
			} catch (error) {
				console.error('Error fetching episodes:', error);
			}
		};

		if (!selectedSeason) {
			setSelectedSeason('Season 1');
		} else {
			fetchEpisodesBySeason();
		}
	}, [selectedSeason]);

	useEffect(() => {
		if (searchTerm.trim() === '') {
			setFilteredEpisodes(episodes);
		} else {
			const filtered = episodes.filter(
				(episode) =>
					episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					episode.episode.toLowerCase().includes(searchTerm.toLowerCase()) ||
					episode.characters.some((character) => character.toLowerCase().includes(searchTerm.toLowerCase())),
			);
			setFilteredEpisodes(filtered);
		}
	}, [searchTerm, episodes]);

	const handleSearchChange = (value) => {
		setSearchTerm(value);
	};

	const handleAddFavorite = (character) => {
		dispatch(addFavorite(character));
		storeData('favorites', [...favoriteCharacters, character]);
	};

	return (
		<View style={{ paddingHorizontal: 12 }}>
			<View style={styles.headerSection}>
				<ImageBackground
					source={{ uri: image.uri }}
					style={styles.image}
					resizeMode='stretch'
				/>
				<Text style={styles.headerText}>Rick and Morty All Episodes</Text>
				<View style={styles.inputSection}>
					<MaterialCommunityIcons
						name='movie-search-outline'
						size={36}
						color='black'
					/>
					<TextInput
						placeholder={'Search for any character or episode…'}
						style={{ marginLeft: 10, fontSize: 18 }}
						onChangeText={handleSearchChange}
					/>
				</View>
				<View style={styles.inputSection}>
					<MaterialCommunityIcons
						name='format-list-bulleted-type'
						size={36}
						color='black'
					/>
					<Picker
						selectedValue={selectedSeason}
						style={{ height: 50, width: 150 }}
						onValueChange={(itemValue, itemIndex) => setSelectedSeason(itemValue)}>
						<Picker.Item
							label='Select a season'
							value=''
						/>
						{seasons.map((season) => (
							<Picker.Item
								key={season}
								label={season}
								value={season}
							/>
						))}
					</Picker>
				</View>
			</View>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<EpisodeList
					episodes={filteredEpisodes}
					navigation={navigation}
					onAddFavorite={handleAddFavorite}
				/>
			)}
		</View>
	);
}

export default HomeScreen;
