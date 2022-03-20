import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Header from '../../Component/Header'
import { Card } from 'react-native-elements'

const Settings = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <Header
                onSearchClick={() => props.navigation.navigate('Search')}
            />
            <View style={[styles.bottomLogin, {
                marginTop: heightPercentageToDP(0),
                alignItems: "center"
            }]}>
                <Card containerStyle={[styles.card, {
                    justifyContent: "center",
                    alignItems: "center",
                }]}>
                    <View style={[styles.profileLogoView, {
                        marginTop: 0,
                        borderEndColor: COLORS.primaryColor
                    }]}>
                        <FastImage
                            source={require('../../images/profile2.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.profileImg}
                        />
                    </View>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.semiBold,
                        marginTop: heightPercentageToDP(1),
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {'Ahmad Muhammad'}
                    </Text>
                </Card>
                <Card containerStyle={[styles.card, {
                    height: heightPercentageToDP(45)
                }]}>
                    <TouchableOpacity style={styles.settingBtn}>
                        <FastImage
                            source={require('../../images/setting_act.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(13),
                                height: widthPercentageToDP(13)
                            }}
                        />
                        <Text style={[styles.skipBtn, {
                            fontFamily: FONTS.semiBold,
                            marginLeft: widthPercentageToDP(4),
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'left',
                        }]}>
                            {t('Profile Information')}
                        </Text>
                        <FastImage
                            source={require('../../images/arrow.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                position: "absolute",
                                right: "2%",
                                top: "32%"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingBtn}>
                        <FastImage
                            source={require('../../images/noti.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(13),
                                height: widthPercentageToDP(13)
                            }}
                        />
                        <Text style={[styles.skipBtn, {
                            fontFamily: FONTS.semiBold,
                            marginLeft: widthPercentageToDP(4),
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'left',
                        }]}>
                            {t('Notifications')}
                        </Text>
                        <FastImage
                            source={require('../../images/arrow.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                position: "absolute",
                                right: "2%",
                                top: "32%"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingBtn}>
                        <FastImage
                            source={require('../../images/invite.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(13),
                                height: widthPercentageToDP(13)
                            }}
                        />
                        <Text style={[styles.skipBtn, {
                            fontFamily: FONTS.semiBold,
                            marginLeft: widthPercentageToDP(4),
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'left',
                        }]}>
                            {t('Invite Friends')}
                        </Text>
                        <FastImage
                            source={require('../../images/arrow.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                position: "absolute",
                                right: "2%",
                                top: "32%"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingBtn}>
                        <FastImage
                            source={require('../../images/payment.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(13),
                                height: widthPercentageToDP(13)
                            }}
                        />
                        <Text style={[styles.skipBtn, {
                            fontFamily: FONTS.semiBold,
                            marginLeft: widthPercentageToDP(4),
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'left',
                        }]}>
                            {t('Payment')}
                        </Text>
                        <FastImage
                            source={require('../../images/arrow.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                position: "absolute",
                                right: "2%",
                                top: "32%"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingBtn}>
                        <FastImage
                            source={require('../../images/logout.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(13),
                                height: widthPercentageToDP(13)
                            }}
                        />
                        <Text style={[styles.skipBtn, {
                            fontFamily: FONTS.semiBold,
                            marginLeft: widthPercentageToDP(4),
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'left',
                        }]}>
                            {t('Logout')}
                        </Text>
                        <FastImage
                            source={require('../../images/arrow.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                position: "absolute",
                                right: "2%",
                                top: "32%"
                            }}
                        />
                    </TouchableOpacity>
                </Card>
            </View>

        </SafeAreaView>
    )
}

export default Settings;