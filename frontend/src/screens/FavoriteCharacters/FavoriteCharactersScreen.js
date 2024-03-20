import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../redux/favoriteSlice';
import { getData } from '../../utils/storage';

const FavoriteCharactersScreen = () => {
	const [favorites, setFavorites] = useState([]);
	const dispatch = useDispatch();
	const favoriteCharacters = useSelector((state) => state.favorite.characters);

	useEffect(() => {
		const fetchFavorites = async () => {
			const storedFavorites = await getData('favorites');
			if (storedFavorites) {
				setFavorites(storedFavorites);
			}
		};

		fetchFavorites();
	}, []);

	const handleRemoveFavorite = (character) => {
		Alert.alert(`Are you sure you want to remove the character ${character} from favorites?`, '', [
			{
				text: 'Evet',
				onPress: () => {
					dispatch(removeFavorite(character));
					const updatedFavorites = favorites.filter((f) => f !== character);
					setFavorites(updatedFavorites);
				},
			},
			{
				text: 'Hayır',
				style: 'cancel',
			},
		]);
	};

	return (
		<View>
			<Text>Favori Karakterler</Text>
			<FlatList
				data={favoriteCharacters}
				renderItem={({ item }) => (
					<View>
						<Text>{item}</Text>
						<Button
							title='Sil'
							onPress={() => handleRemoveFavorite(item)}
						/>
					</View>
				)}
				keyExtractor={(item) => item}
			/>
		</View>
	);
};

export default FavoriteCharactersScreen;
