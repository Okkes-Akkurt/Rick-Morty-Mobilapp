import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import EpisodeDetails from './src/screens/episodeDetail/EpisodeDetails';

export default function App() {
	return (
		<View style={styles.container}>
      {/* <HomeScreen /> */}
      <EpisodeDetails />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
	},
});
