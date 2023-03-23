import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import { Card } from '../../components'
import imageHandle from '../../utils/imageHandle'

const Home = ({navigation}) => {
    const [discover, setDiscover] = useState('')
    const getData = async() => {
        try {
            const response = await Api.Discover()
            setDiscover(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <View style={styles.container}>
            <View style={{ borderBottomWidth: 1 , borderBottomColor: '#2B2B2B', marginBottom: 10 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 900 }}>Movie List</Text>
            </View>
            <FlatList
                data={discover}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <Card
                            image={imageHandle(item.poster_path)}
                            title={item.original_title}
                            description={item.overview}
                        />
                    )
                }}

            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    }
})