import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import EpisodeList from '../../components/home/EpisodeList';

const image = { uri: 'https://www.moviementarios.com/wp-content/uploads/2019/11/5dc14d58a34f2_thumbnail-896x500.jpg' };

function HomeScreen() {



	return (
		<View style={{paddingHorizontal:12}}>
			<View style={styles.headerSection}>
				<ImageBackground
					source={{uri:image.uri}}
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
					/>
				</View>
			</View>
			<EpisodeList />
		</View>
	);
}

export default HomeScreen;
