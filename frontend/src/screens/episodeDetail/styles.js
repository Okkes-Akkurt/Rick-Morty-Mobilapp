import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	episodeContainer: {
		margin: 10,
	},
	episodeInfo: {
		marginBottom: 20,
	},
	episodeImage: {
		width: 100,
		height: 100,
		resizeMode: 'cover',
		borderRadius: 10,
	},
	episodeTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},
	episodeDescription: {
		fontSize: 16,
		marginTop: 5,
		color: '#666',
	},
	releaseDate: {
		fontSize: 14,
		marginTop: 5,
		color: '#999',
	},
	charactersTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
});

export default styles;
