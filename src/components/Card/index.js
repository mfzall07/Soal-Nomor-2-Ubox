import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Default } from '../../assets';
import Gap from '../Gap';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({image, title, description, onPress}) => {
    return (
        <View onPress={onPress} style={styles.mainCard}>
            <ImageBackground source={image == null ? Default : {uri:image}} resizeMode="cover" imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} style={{  flex: 1 }} />
            <Gap height={5}/>
            <View style={{ height: '25%', borderBottomStartRadius: 8, borderBottomEndRadius: 8, paddingHorizontal: 10, flexDirection: 'column' }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 900 }} numberOfLines={1} >{!title ? '-' : title}</Text>
                <Gap height={5}/>
                <Text style={{ color: '#000000', fontSize: 10 }} numberOfLines={3} >{!description ? '-' : description}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    mainCard: {
        height: 300,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 10,
    }
})