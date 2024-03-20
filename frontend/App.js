import HomeScreen from './src/screens/HomeScreen/HomeScreen.js';
import EpisodeDetails from './src/screens/episodeDetail/EpisodeDetails.js';
import CharacterList from './src/components/characterList/CharacterList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import FavoriteCharactersScreen from './src/screens/FavoriteCharacters/FavoriteCharactersScreen.js';

const Stack = createNativeStackNavigator();

const App = () => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
				/>
				<Stack.Screen
					name='EpisodeDetails'
					component={EpisodeDetails}
				/>
				<Stack.Screen
					name='Character List'
					component={CharacterList}
				/>
				<Stack.Screen
					name='Favorites'
					component={FavoriteCharactersScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
);


export default App;
