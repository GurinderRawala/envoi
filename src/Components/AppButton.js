import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import S from '../Style/V1style';

const AppButton = ({ title, Submit }) =>{
    return(
        <TouchableOpacity
        onPress={Submit}
        >
            <View style={S.reportBtn}>
                <Text style={{color: '#fff'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppButton