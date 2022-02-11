import React from 'react';
import { View, FlatList } from 'react-native';
import DetailsContainer from '../Components/DetailsContainer';
import DistanceCalculator from '../Hooks/DistanceCalculator';

const Details = ({navigation}) =>{
    const D =  navigation.getParam('Data')
    const DATA = DistanceCalculator(D)
    return(
    <View
      style={{flex: 1}}
    >

   <FlatList 
         data={DATA}
         keyExtractor={(item) => Math.random()}
         renderItem={({item}) =>{
             return(
                <DetailsContainer 
                Address={item.Address}
                Long={item.Longitude}
                Lat={item.Latitude}
              />
             )
         }}
     />

    </View>
    )
}

export default Details