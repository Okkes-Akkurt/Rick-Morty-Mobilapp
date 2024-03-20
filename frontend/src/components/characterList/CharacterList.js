import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice'; // Favori işlemleri ekleniyor

const CharacterList = ({ characters }) => {
    const [characterData, setCharacterData] = useState([]);
    const favoriteCharacters = useSelector((state) => state.favorite.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const promises = characters.map((characterURL) => axios.get(characterURL));
                const responses = await Promise.all(promises);
                const characterDetails = responses.map((response) => ({
                    ...response.data,
                    isFavorite: favoriteCharacters.some((char) => char.id === response.data.id)
                }));
                setCharacterData(characterDetails);
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchCharacterData();
    }, [characters, favoriteCharacters]);

    const handleFavorite = (character) => {
        const isFavorite = character.isFavorite;
        if (isFavorite) {
            dispatch(removeFavorite(character));
        } else {
            dispatch(addFavorite(character));
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.renderItems}>
                <Image
                    source={{ uri: item.image }}
                    resizeMode='stretch'
                    style={styles.listImage}
                />
                <View style={styles.characterInfo}>
                    <View>
                        <Text style={styles.characterName}>{item.name}</Text>
                        <Text style={styles.detailLabel}>Status</Text>
                        <Text style={styles.detailText}>{item.status}</Text>
                    </View>
                    <View style={styles.characterDetails}>
                        <View style={styles.characterDetail}>
                            <Text style={styles.detailLabel}>Species</Text>
                            <Text style={styles.detailText}>{item.species}</Text>
                        </View>
                        <View style={styles.characterDetail}>
                            <Text style={styles.detailLabel}>Gender</Text>
                            <Text style={styles.detailText}>{item.gender}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleFavorite(item)}>
                    <AntDesign
                        name={item.isFavorite ? 'star' : 'staro'}
                        size={24}
                        color={item.isFavorite ? 'yellow' : 'black'}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={characterData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default CharacterList;
