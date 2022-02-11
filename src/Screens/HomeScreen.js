import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Zoning from '../Hooks/Zoning';
import AppButton from '../Components/AppButton';
import S from '../Style/V1style';
const HomeScreen = ({navigation}) =>{

  const { Toronto, Peel, York, Durham } = Zoning()


  
    return(
     
            <View style={{flex: 1, justifyContent: 'center'}}>
            
              <Text style={S.textBold}>Select a Zone</Text>
              <AppButton 
               title="Toronto"
               Submit={() => navigation.navigate("Details",{
                Data: Toronto
              })}
              />
               <AppButton 
               title="Peel"
               Submit={() => navigation.navigate("Details",{
                Data: Peel
              })}
              />
               <AppButton 
               title="York"
               Submit={() => navigation.navigate("Details",{
                Data: York
              })}
              />
               <AppButton 
               title="Durham"
               Submit={() => navigation.navigate("Details",{
                Data: Durham
              })}
              />
              
            </View>
    )
}

export default HomeScreen