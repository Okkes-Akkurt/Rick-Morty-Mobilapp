import React, { useState } from 'react'
import { Button, Dimensions, FlatList, Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const { width, height } = Dimensions.get('window');

const CharacterList = () => {

    const [character, setCharacter] = useState([
		{ id: '1', title: 'Öğe 1' },
		{ id: '2', title: 'Öğe 2' },
		{ id: '3', title: 'Öğe 3' },
    ]);

    const renderItem = ({ item }) => (
		<View style={styles.renderItems}>
			<View>
				<Image
					source={{ }}
					resizeMode='stretch'
					width={width * 0.25}
					height={height * 0.1}
				/>
				<View>
					<Text style={styles.listText}>{item.title}</Text>
					<Text style={styles.listText}>{item.title}</Text>
					<Text style={styles.listText}>{item.title}</Text>
					<Text style={styles.listText}>{item.title}</Text>
				</View>
			</View>
			<AntDesign
				name='staro'
				size={24}
                color='black'
			/>
		</View>
	);

  return (
		<View>
			<FlatList
				data={character}
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

export default CharacterList