import React from 'react';
import { View, Text } from 'react-native';
import S from '../Style/V1style';

const DetailsContainer = ({ Address, Long, Lat }) =>{
    return(
        <View style={S.Conatiner}>
            <Text style={[S.textBold, {textAlign: 'left', fontSize: 16}]}>{`${Address}`}</Text>
            <Text style={{textAlign: 'right'}}>{`Longitude: ${Long}, Latitude: ${Lat}`}</Text>
        </View>
    )
}

export default DetailsContainer