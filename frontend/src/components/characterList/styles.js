import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	renderItems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	listText: {
		fontSize: 16,
		fontWeight: 'bold',
        color: '#333',
	},
	listImage: {
		flexDirection: 'row',
        justifyContent: 'space-between',
		width: '45%',
	},
	flatlistContainer: {
		marginBottom: 80,
	},
    textGroup: {
        flexDirection:'column',
        justifyContent:'space-between'
	},
});

export default styles;
