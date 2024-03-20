import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';

const listImage = {
	uri: 'https://a2.tvspielfilm.de/imedia/2744/9012744,b34Y8kPGwmUVDQcGEIcXDrnb9MeSlLMNdDB6LTriKkkE7bcaQlVg3wUCZOWDaQVAx7KGDDsanFkjLYqGucXUYw==.jpg',
};

const { width, height } = Dimensions.get('window');

const EpisodeList = ({ episodes, navigation, onAddFavorite }) => {
	const [visibleItemCount, setVisibleItemCount] = useState(4); // İlk başta görünen öğe sayısı
	const searchTerm = useSelector((state) => state.search.searchTerm);
	const filteredEpisodes = episodes.filter(
		(episode) => episode && episode.characters && episode.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handlePress = (episodeId) => {
		navigation.navigate('EpisodeDetails', { episodeId });
	};

	const renderFooter = () => {
		return (
			<View style={styles.loadMore}>
				<TouchableOpacity onPress={() => setVisibleItemCount((prevCount) => prevCount + 4)}>
					<Text style={styles.loadMoreText}>Load More</Text>
				</TouchableOpacity>
			</View>
		);
	};

	const renderItem = ({ item }) => {
		if (!item || !item.characters) {
			return null;
		}
		return (
			<TouchableOpacity
				key={item.id}
				onPress={() => handlePress(item.id)}>
				<View
					style={styles.renderItems}
					key={item.id}>
					<View style={styles.listImage}>
						<Image
							source={{ uri: listImage.uri }}
							resizeMode='stretch'
							style={{ width: width * 0.25, height: height * 0.1 }}
						/>
						<Text style={styles.listText}>{item.name}</Text>
					</View>
					<View>
						<Text style={styles.listText}>{item.air_date}</Text>
						<Text style={styles.listText}>{item.episode}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<FlatList
				data={filteredEpisodes}
				renderItem={renderItem}
				ListFooterComponent={renderFooter}
				keyExtractor={(item) => item.id.toString()}
				initialNumToRender={visibleItemCount} 
			/>
		</View>
	);
};

export default EpisodeList;
