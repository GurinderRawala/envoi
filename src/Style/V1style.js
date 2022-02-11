import { StyleSheet } from 'react-native'

const S = StyleSheet.create({
    Conatiner : {
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 10,
        marginHorizontal: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    Wrapper:{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 3
    },
    reportBtn:{
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 12,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10
    },
    chatview:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
     },
    textBold: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18
    },
    close:{
        position: 'absolute',
        top: -250,
        right: 10,
        zIndex: 2
    }
});

export default S;