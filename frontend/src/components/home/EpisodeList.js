import { useState } from 'react';
import styles from './styles';
import { Button, Dimensions, FlatList, Image, Text, View } from 'react-native';


const listImage = {
	uri: 'https://a2.tvspielfilm.de/imedia/2744/9012744,b34Y8kPGwmUVDQcGEIcXDrnb9MeSlLMNdDB6LTriKkkE7bcaQlVg3wUCZOWDaQVAx7KGDDsanFkjLYqGucXUYw==.jpg',
};

const { width, height } = Dimensions.get('window');

const EpisodeList = () => {

    	const [episodes, setEpisodes] = useState([
			{ id: '1', title: 'Öğe 1' },
			{ id: '2', title: 'Öğe 2' },
			{ id: '3', title: 'Öğe 3' },
		]);

    const renderItem = ({ item }) => (
		<View style={styles.renderItems}>
			<View style={styles.listImage}>
				<Image
					source={{ uri: listImage.uri }}
					resizeMode='stretch'
					width={width * 0.25}
					height={height * 0.1}
				/>
				<Text style={styles.listText}>{item.title}</Text>
			</View>
			<View>
				<Text style={styles.listText}>{item.title}</Text>
				<Text style={styles.listText}>{item.title}</Text>
			</View>
		</View>
	);
  return (
		<View>
			<FlatList
				data={episodes}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<Button
				title='Load More'
				color='#841584'
				accessibilityLabel='Load more episode'
			/>
		</View>
  );
}

export default EpisodeList