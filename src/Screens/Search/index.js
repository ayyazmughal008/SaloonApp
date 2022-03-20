import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Header from '../../Component/SearchHeader'


const Search = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                onBackPress={() => props.navigation.goBack()}
            />
        </SafeAreaView>
    )
}

export default Search;