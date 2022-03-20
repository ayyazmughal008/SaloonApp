import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, I18nManager, Modal, Alert, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Component/Header'
import { useTranslation } from 'react-i18next';
import Items from '../../Component/Items'
import { data } from './data'

const Home = (props) => {
    const { t, i18n } = useTranslation();
    const [isGender, setIsGender] = useState(true)
    const [gender, setGender] = useState("")


    return (
        <SafeAreaView style={styles.container}>
            <Header
                onSearchClick={() => props.navigation.navigate('Search')}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.bottomLogin, {
                    marginTop: heightPercentageToDP(4)
                }]}>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.semiBold,
                        //marginTop: heightPercentageToDP(1.5),
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {t('Upcoming Bookings')}
                    </Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => "unique" + index}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{
                            //marginTop: heightPercentageToDP(2),
                            //height: heightPercentageToDP(33)
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <Items
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                    time={item.time}
                                />
                            )
                        }}
                    />

                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.semiBold,
                        //marginTop: heightPercentageToDP(4),
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {t('Book Again')}
                    </Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => "unique" + index}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{
                            //marginTop: heightPercentageToDP(2),
                            //height: heightPercentageToDP(33)
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <Items
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                    time={item.time}
                                />
                            )
                        }}
                    />
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.semiBold,
                        //marginTop: heightPercentageToDP(4),
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {t('Favorites')}
                    </Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => "unique" + index}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{
                            //marginTop: heightPercentageToDP(2),
                            //height: heightPercentageToDP(33)
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <Items
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                    time={item.time}
                                />
                            )
                        }}
                    />
                </View>
            </ScrollView>
            {isGender &&
                <Modal
                    visible={isGender}
                    animationType="fade"
                    transparent={true}
                >
                    <View style={modalStyles.modalMain}>
                        <View style={modalStyles.innerModal}>
                            <Text style={[styles.skipBtn, {
                                fontFamily: FONTS.semiBold,
                                marginTop: heightPercentageToDP(7),
                                fontSize: SIZES.h6,
                                color: COLORS.black,
                                textAlign: 'center',
                            }]}>
                                {t('Select Gender')}
                            </Text>
                            <View style={modalStyles.row}>
                                <TouchableOpacity
                                    onPress={() => setGender('male')}
                                >
                                    <FastImage
                                        source={gender === 'male' ?
                                            require('../../images/male_select.png')
                                            : require('../../images/male.png')}
                                        resizeMode={FastImage.resizeMode.cover}
                                        style={modalStyles.img}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setGender('female')}
                                >
                                    <FastImage
                                        source={gender === 'female' ?
                                            require('../../images/female_select.png')
                                            : require('../../images/female.png')}
                                        resizeMode={FastImage.resizeMode.cover}
                                        style={modalStyles.img}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (!gender) {
                                        Alert.alert('', t('Please choose the gender'))
                                    } else {
                                        setIsGender(false)
                                    }
                                }}
                                style={[styles.nxtBtn, {
                                    marginTop: heightPercentageToDP(7),
                                    width: widthPercentageToDP(80)
                                }]}
                            >
                                <Text style={[styles.skipBtn, { color: COLORS.white }]}>
                                    {t('DONE')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
        </SafeAreaView>
    )
}

const modalStyles = StyleSheet.create({
    modalMain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    innerModal: {
        width: widthPercentageToDP(85),
        height: heightPercentageToDP(62),
        borderRadius: widthPercentageToDP(5),
        backgroundColor: COLORS.white
    },
    row: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: heightPercentageToDP(7),
    },
    img: {
        width: widthPercentageToDP(40),
        height: widthPercentageToDP(40)
    }
})

export default Home;