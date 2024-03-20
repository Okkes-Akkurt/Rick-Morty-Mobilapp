import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	renderItems: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: '#f0f0f0',
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	listImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginRight: 10,
	},
	characterName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	characterDetail: {
		marginRight: 10,
	},
	detailLabel: {
		fontWeight: 'bold',
		marginRight: 5,
	},
	detailText: {
		fontSize: 16,
	},
	characterInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
