import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, SafeAreaView, I18nManager, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { styles } from '../../assets/Styles'
import { SIZES, COLORS, FONTS } from '../../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { isFirstTime } from '../../Redux/action.js'
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import { slides } from './slider'
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';



const Login = (props) => {
    const dispatch = useDispatch()
    const AuthLoading = useSelector((state) => state.user.AuthLoading);
    const isFirst = useSelector((state) => state.user.isFirst);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [number, setNumber] = useState('')
    const [isCheck, setCheck] = useState('')
    let flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const { t, i18n } = useTranslation();

    //Flatlist props that calculates current item index
    const onViewRef = React.useRef(({ viewableItems }) => {
        setActiveIndex(viewableItems[0].index);
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    const gotoNextPage = () => {
        if (activeIndex + 1 < slides.length) {
            flatListRef.current.scrollToIndex({
                index: activeIndex + 1,
                animated: true,
            });
        } else {
            dispatch(isFirstTime(true))
        }
    };
    const renderItem = (({ item, index }) => {
        return (
            <View style={styles.topSlider}>
                <FastImage
                    source={item.image}
                    resizeMode={FastImage.resizeMode.contain}
                    style={styles.slideImg}
                />
            </View>
        )
    })
    const slides = [
        {
            id: 1,
            title: t('Nearby Service'),
            description: t('Find and book Barber, beauty, Salon & Spa service anywhere, anytime'),
            image: require('../../images/slide1.png')
        },
        {
            id: 2,
            title: t('Service for Male & Female'),
            description: t('Find and book services for both male and female nearby your location'),
            image: require('../../images/slide2.png')
        },
        {
            id: 3,
            title: t('Style that fit your lifestyle'),
            description: t('Choose special offers and packages that fir your lifestyle'),
            image: require('../../images/slide3.png')
        },
    ]

    if (!isFirst) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: heightPercentageToDP(55), width: widthPercentageToDP(100) }}>
                    <FlatList
                        ref={flatListRef}
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                        data={slides}
                        keyExtractor={(item, index) => item.id}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            {
                                useNativeDriver: false,
                            }
                        )}
                        pagingEnabled
                        horizontal
                        inverted={true}
                        disableVirtualization={true}
                        decelerationRate={'normal'}
                        scrollEventThrottle={16}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.dotStyle}>
                    <ExpandingDot
                        data={slides}
                        expandingDotWidth={30}
                        scrollX={scrollX}
                        activeDotColor={COLORS.primaryColor}
                        inActiveDotColor={COLORS.grey}
                        inActiveDotOpacity={0.6}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            backgroundColor: "red",
                            borderRadius: 5,
                            marginHorizontal: 5
                        }}
                        containerStyle={{
                            top: 30,
                        }}
                    />
                </View>
                <View style={{ width: widthPercentageToDP(90), alignSelf: "center", marginTop: heightPercentageToDP(4) }}>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.bold,
                        fontSize: widthPercentageToDP(6),
                        textAlign: "center",
                        color: COLORS.black
                    }]}>
                        {slides[activeIndex].title}
                    </Text>
                    <Text style={[styles.skipBtn, {
                        fontFamily: FONTS.medium,
                        marginTop: heightPercentageToDP(1),
                        fontSize: widthPercentageToDP(4.5),
                        color: COLORS.black,
                        textAlign: "center",
                    }]}>
                        {slides[activeIndex].description}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => gotoNextPage()}
                    // onPress={() => {
                    //     i18n.changeLanguage(i18n.language === 'ar' ? 'iw_'
                    //         : i18n.language === 'iw_' ? 'en'
                    //             : i18n.language === 'en' ? 'ar' : 'iw_')
                    //         .then(() => {
                    //             I18nManager.forceRTL(i18n.language === 'ar');
                    //             //RNRestart.Restart();
                    //         })
                    //         .catch(error => {
                    //             console.log(error)
                    //         })
                    // }}
                    style={styles.nxtBtn}
                >
                    <Text style={[styles.skipBtn, { color: COLORS.white }]}>
                        {activeIndex == 2 ? t('GET STARTED') : t('NEXT')}
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[styles.topSlider, {
                        height: heightPercentageToDP(40),
                        //backgroundColor: "red"
                    }]}>
                        <FastImage
                            source={require('../../images/login_pic.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={[styles.slideImg, {
                                width: widthPercentageToDP(80),
                                height: widthPercentageToDP(80)
                            }]}
                        />
                    </View>
                    <View style={styles.bottomLogin}>
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
                            {t('Join our Community!')}
                        </Text>
                        <Input
                            placeholder={t('Phone Number')}
                            placeholderTextColor={COLORS.black}
                            leftIcon={
                                <FastImage
                                    source={require('../../images/number.png')}
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
                            onChangeText={(text) => setNumber(text)}
                            value={number}
                        />
                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: heightPercentageToDP(3) }}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}>
                                <FastImage
                                    source={!isCheck ?
                                        require('../../images/un_check.png')
                                        : require('../../images/check.png')
                                    }
                                    resizeMode={FastImage.resizeMode.cover}
                                    style={{
                                        width: widthPercentageToDP(7),
                                        height: widthPercentageToDP(7)
                                    }}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.h3,
                                color: COLORS.black,
                                textAlign: 'left',
                                padding: widthPercentageToDP(2)
                            }}>
                                {t('By creating an account, you agree to our') + ' '}
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.h3,
                                    color: COLORS.black,
                                    textAlign: 'left',
                                }}>
                                    {t('Terms of Services') + ' '}
                                </Text>
                                <Text style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: SIZES.h3,
                                    color: COLORS.black,
                                    textAlign: 'left',
                                }}>
                                    {t('and') + ' '}
                                </Text>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.h3,
                                    color: COLORS.black,
                                    textAlign: 'left',
                                }}>
                                    {t('Privacy Policy')}
                                </Text>
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Otp')}
                            style={[styles.nxtBtn, {
                                marginTop: heightPercentageToDP(10)
                            }]}
                        >
                            <Text style={[styles.skipBtn, { color: COLORS.white }]}>
                                {t('LOGIN')}
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.h4,
                            color: COLORS.black,
                            textAlign: 'center',
                            marginTop: heightPercentageToDP(0.5),

                        }}>
                            {t('Don\'t have an account?') + ' '}
                            <Text
                                onPress={() => { props.navigation.navigate('Register') }}
                                style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.h4,
                                    color: COLORS.primaryColor,
                                }}>
                                {t('Register')}
                            </Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }

}

export default Login;