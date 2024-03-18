import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
	headerSection: {
		height: height * 0.45,
		borderStyle: 'solid',
		borderRadius: 50,
		marginBottom: 20,
	},
	image: {
		flex: 1,
	},

	headerText: {
		padding: 10,
		color: '#00B0CE',
		fontFamily: 'Roboto',
		backgroundColor: '#FBF075',
		textAlign: 'center',
		fontSize: 20,
		marginVertical: 10,
		borderRadius: 5,
	},
	inputSection: {
		flexDirection: 'row',
		backgroundColor: '#F2F2F2',
		padding: 10,
		borderRadius: 40,
	},
	listImage: {
		width: '40%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	listText: {
		fontSize: 16,
		marginBottom: 12,
	},
    renderItems: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between'
    },
});

export default styles;
