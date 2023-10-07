import React from 'react'
import { FlatList, View } from 'react-native'
import { Card } from '../components/Card';
import data from '../data.json';

export const Home = () => {
	return (
		<View>
			<FlatList 
				data={data}
				renderItem={({item}) => <Card 
					name={item.name}
					imgURL={item.imgURL}
					address={item.address}
					area={item.area}
					bathrooms={item.bathrooms}
					price={item.price}
					rating={item.rating}
					rooms={item.rooms}
					/>}
			/>
		</View>
	)
}
