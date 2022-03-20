import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Header from '../../Component/Header'
import MapItem from '../../Component/MapItems'
import { data } from './data'

const Map = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                onSearchClick={() => props.navigation.navigate('Search')}
            />
            <View style={styles.mapBottom}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => "unique" + index}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <MapItem
                                image={item.image}
                                title={item.title}
                                address={item.address}
                                rating={item.rating}
                                distance={item.distance}
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Map;