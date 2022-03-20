import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTranslation } from 'react-i18next';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 5;

const Otp = (element) => {
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if (value == 12345) {
            element.navigation.navigate('TabStack')
        }
    }, [value])



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.topSlider, {
                    height: heightPercentageToDP(30),
                    //backgroundColor:"red"
                }]}>
                    <FastImage
                        source={require('../../images/Confirmed.png')}
                        resizeMode={FastImage.resizeMode.contain}
                        style={[styles.slideImg, {
                            width: widthPercentageToDP(60),
                            height: widthPercentageToDP(60)
                        }]}
                    />
                </View>
                <View style={styles.bottomLogin}>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.medium,
                        marginTop: heightPercentageToDP(2),
                        fontSize: SIZES.h3,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {t('Phone Verification')}
                    </Text>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.bold,
                        marginTop: heightPercentageToDP(1.5),
                        fontSize: SIZES.h6,
                        color: COLORS.secondaryColor,
                        textAlign: 'left',
                    }]}>
                        {t('Enter your OTP code')}
                    </Text>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: heightPercentageToDP(10), justifyContent: "space-between" }}>
                        <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: SIZES.h3,
                            color: COLORS.black,
                            textAlign: 'left',
                        }}>
                            {t('Resend code in') + ' '}
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.h3,
                                color: COLORS.primaryColor,
                                textAlign: 'left',
                            }}>
                                {t('10 seconds')}
                            </Text>
                        </Text>

                        <TouchableOpacity>
                            <FastImage
                                source={require('../../images/re_send.png')}
                                resizeMode={FastImage.resizeMode.cover}
                                style={{
                                    width: widthPercentageToDP(15),
                                    height: widthPercentageToDP(15)
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Otp