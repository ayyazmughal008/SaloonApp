import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import { slides } from './slider'
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';

const Register = (props) => {

    const { t, i18n } = useTranslation();
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.bottomLogin, {
                    marginTop: heightPercentageToDP(5)
                }]}>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.medium,
                        //marginTop: heightPercentageToDP(1),
                        fontSize: SIZES.h3,
                        color: COLORS.black,
                        textAlign: 'left',
                    }]}>
                        {t('Hello, nice to meet you')}
                    </Text>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.bold,
                        marginTop: heightPercentageToDP(1.5),
                        fontSize: SIZES.h6,
                        color: COLORS.secondaryColor,
                        textAlign: 'left',
                    }]}>
                        {t('Profile Information')}
                    </Text>
                    <View style={styles.profileLogoView}>
                        <FastImage
                            source={require('../../images/profile2.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.profileImg}
                        />
                    </View>

                    <Input
                        placeholder={t('Full Name')}
                        placeholderTextColor={COLORS.black}
                        leftIcon={
                            <FastImage
                                source={require('../../images/name.png')}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{
                                    width: widthPercentageToDP(8),
                                    height: widthPercentageToDP(8)
                                }}
                            />
                        }
                        leftIconContainerStyle={{
                            width: widthPercentageToDP(12),
                            //backgroundColor: "red"
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                            //width: widthPercentageToDP(70),
                            //backgroundColor:"red"
                        }}
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                    <Input
                        placeholder={t('Date of Birth')}
                        placeholderTextColor={COLORS.black}
                        leftIcon={
                            <FastImage
                                source={require('../../images/calender.png')}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{
                                    width: widthPercentageToDP(8),
                                    height: widthPercentageToDP(8)
                                }}
                            />
                        }
                        leftIconContainerStyle={{
                            width: widthPercentageToDP(12),
                            //backgroundColor: "red"
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                            //width: widthPercentageToDP(70),
                            //backgroundColor:"red"
                        }}
                        inputStyle={styles.input}
                        containerStyle={[styles.inputContainer, {
                            marginTop: heightPercentageToDP(2)
                        }]}
                        onChangeText={(text) => setDate(text)}
                        value={number}
                    />
                    <Input
                        placeholder={t('Gender')}
                        placeholderTextColor={COLORS.black}
                        leftIcon={
                            <FastImage
                                source={require('../../images/gender.png')}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{
                                    width: widthPercentageToDP(8),
                                    height: widthPercentageToDP(8)
                                }}
                            />
                        }
                        leftIconContainerStyle={{
                            width: widthPercentageToDP(12),
                            //backgroundColor: "red"
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                            //width: widthPercentageToDP(70),
                            //backgroundColor:"red"
                        }}
                        inputStyle={styles.input}
                        containerStyle={[styles.inputContainer, {
                            marginTop: heightPercentageToDP(2)
                        }]}
                        onChangeText={(text) => setGender(text)}
                        value={gender}
                    />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Login')}
                        style={styles.nxtBtn}
                    >
                        <Text style={[styles.skipBtn, { color: COLORS.white }]}>
                            {t('REGISTER')}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        textAlign: 'center',
                        marginTop: heightPercentageToDP(1),

                    }}>
                        {t('Already Registered?') + ' '}
                        <Text
                            onPress={() => { props.navigation.navigate('Login') }}
                            style={{
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.h4,
                                color: COLORS.primaryColor,
                            }}>
                            {t('Login')}
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Register;