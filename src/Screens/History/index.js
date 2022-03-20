import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Header from '../../Component/Header'
import Toggle from '../../Component/Toggle'
import Upcoming from '../../Component/Upcoming'
import HistoryItem from '../../Component/History'
import { data, data2 } from './data'



const History = (props) => {
    const { t, i18n } = useTranslation();
    const [toggleValue, setToggleValue] = useState(1)
    const [checked, setChecked] = useState(false)


    return (
        <SafeAreaView style={styles.container}>
            <Header
                onSearchClick={() => props.navigation.navigate('Search')}
            />
            <View style={{ alignSelf: "center", width: widthPercentageToDP(90), marginTop: heightPercentageToDP(5) }}>
                <Toggle
                    selectionMode={1}
                    roundCorner={true}
                    option1={t('Upcoming')}
                    option2={t('History')}
                    onSelectSwitch={(newState) => setToggleValue(newState)}
                    selectionColor={COLORS.primaryColor}
                />
            </View>
            <View style={[styles.bottomLogin, {
                marginTop: heightPercentageToDP(2)
            }]}>
                {toggleValue == 1 ?
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => "unique" + index}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Upcoming
                                    image={item.image}
                                    title={item.title}
                                    address={item.address}
                                    time={item.time}
                                    name={item.name}
                                    checked={item.checked}
                                    setChecked={(value) => setChecked(value)}
                                />
                            )
                        }}
                    />
                    : <FlatList
                        data={data2}
                        keyExtractor={(item, index) => "unique" + index}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <HistoryItem
                                    image={item.image}
                                    title={item.title}
                                    address={item.address}
                                    time={item.time}
                                    name={item.name}
                                    checked={item.checked}
                                    setChecked={(value) => setChecked(value)}
                                />
                            )
                        }}
                    />
                }
            </View>


        </SafeAreaView>
    )
}

export default History;