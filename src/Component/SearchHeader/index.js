import React from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS, FONTS, SIZES } from '../../assets/Colors'
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next'

const HeaderMenu = props => {
    const { t, i18n } = useTranslation();

    return (
        <Header
            leftComponent={
                <TouchableOpacity onPress={props.onBackPress}>
                    <FastImage
                        source={require('../../images/back.png')}
                        style={{
                            width: widthPercentageToDP(8),
                            height: widthPercentageToDP(8),
                            marginTop: heightPercentageToDP(1)
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Input
                    placeholder={t('Search Salon, Spa etc')}
                    placeholderTextColor={COLORS.black}
                    leftIcon={
                        <FastImage
                            source={require('../../images/search.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                width: widthPercentageToDP(6),
                                height: widthPercentageToDP(6)
                            }}
                            tintColor={COLORS.lightBlack}
                        />
                    }
                    leftIconContainerStyle={{
                        width: widthPercentageToDP(10),
                        //backgroundColor: "red"
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0,
                        //width: widthPercentageToDP(70),
                        //backgroundColor:"red"
                    }}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                    onChangeText={props.setSearch}
                    value={props.search}
                />
            }
            rightComponent={
                <TouchableOpacity>
                    <FastImage
                        source={require('../../images/setting.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{
                            width: widthPercentageToDP(7),
                            height: widthPercentageToDP(7),
                            marginTop: heightPercentageToDP(1.5)
                            //marginRight: widthPercentageToDP(5)
                        }}
                    />
                </TouchableOpacity>
            }
            containerStyle={{
                backgroundColor: COLORS.darkBlue,
                borderBottomWidth: 0,
                height: heightPercentageToDP(14)
            }}
            statusBarProps={{
                backgroundColor: COLORS.darkBlue
            }}
            barStyle="light-content"
        />
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: COLORS.black,
        borderRadius: widthPercentageToDP(10),
        width: widthPercentageToDP(60),
        height: heightPercentageToDP(7),
        backgroundColor: COLORS.white
    },
    input: {
        fontSize: SIZES.h3,
        fontFamily: FONTS.regular,
        color: COLORS.black
    },
})

export default HeaderMenu;