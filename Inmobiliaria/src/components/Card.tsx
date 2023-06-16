import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import data from '../data.json';
import Materialcon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Card = () => {
	const dataRender = data[8];
	const [likeApartment, setlikeApartment] = useState(false);
	const handleColor = () =>{
		if (likeApartment){
			setlikeApartment(false);
		} else {
			setlikeApartment(true);
		}
	};
	return (
		<View style={styles.container}>
			<Image
				source={{uri: dataRender.imgURL}}
				style={styles.imga}
			/>
			<View style={styles.description}>
				<Text style={styles.apartmentName}> {dataRender.name} </Text>
				<View style={{marginHorizontal: 5, ...styles.subConteiner}}>
					<Materialcon name="location-pin" size={25} color={'#747783'}/>
					<Text style={styles.subTitle}>{dataRender.address}</Text>
				</View>
				<View style={styles.subConteiner}>
					<View style={styles.features}>
						<Materialcon name="single-bed" size={25} color={'#747783'}/>
						<Text style={styles.qty}>{dataRender.rooms}</Text>
					</View>
					<View style={styles.features}>
						<Materialcon name="bathtub" size={25} color={'#747783'}/>
						<Text style={styles.qty}>{dataRender.bathrooms}</Text>
					</View>
					<View style={styles.features}>
						<Materialcon name="terrain" size={25} color={'#747783'}/>
						<Text style={styles.qty}>{dataRender.area} ft</Text>
						<Text style={styles.subScript}>2</Text>
					</View>
				</View>
				<View style={styles.footerContainer}>
					<Text style={styles.apartmentName}>${dataRender.price}</Text>
					<TouchableOpacity activeOpacity={0.6} onPress={() => handleColor()}>
						<CommunityIcon name="heart-circle" size={35} color={likeApartment ? 'red' : 'green'}/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 5,
		marginVertical: 15,
		backgroundColor: '#f5fdff',
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
	imga: {
		flex: 2,
		borderRadius: 7,
	},
	description:{
		flex: 3,
		marginHorizontal:10,
	},
	apartmentName: {
		fontSize: 17,
		fontWeight: '600',
		color:'black',
		marginHorizontal: 5,
	},
	subTitle: {
		fontSize: 15,
		fontWeight: '500',
		color: '#737373',
	},
	subConteiner:{
		flexDirection: 'row',
		alignItems: 'center',
	},
	qty:{
		color:'black',
		fontSize:17,
		fontWeight: '700',
		marginHorizontal: 5,
	},
	features:{
		marginHorizontal: 5,
		flexDirection: 'row',
	},
	subScript:{
		lineHeight: 18,
		color: 'black',
		fontWeight: '600',
	},
	footerContainer:{
		flexDirection:'row',
		justifyContent: 'space-between',
	},
});
