import React from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS, FONTS, SIZES } from '../../assets/Colors'
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Switch } from 'react-native-elements';

const Items = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <FastImage
                    source={props.image}
                    resizeMode={FastImage.resizeMode.cover}
                    style={styles.img}
                />
                <View style={styles.coloum}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text style={styles.date}>
                        {props.address}
                    </Text>
                </View>
            </View>
            <View style={[styles.row, {
                justifyContent: "space-between"
            }]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FastImage
                        source={require('../../images/tick.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{
                            width: widthPercentageToDP(5),
                            height: widthPercentageToDP(5),
                        }}
                    />
                    <Text style={[styles.date, {
                        marginTop: 0,
                        marginLeft: widthPercentageToDP(2)
                    }]}>
                        {'Hair Styling'}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FastImage
                        source={require('../../images/tick.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{
                            width: widthPercentageToDP(5),
                            height: widthPercentageToDP(5),
                        }}
                    />
                    <Text style={[styles.date, {
                        marginTop: 0,
                        marginLeft: widthPercentageToDP(2)
                    }]}>
                        {'Hair Color'}
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FastImage
                        source={require('../../images/clock.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{
                            width: widthPercentageToDP(10),
                            height: widthPercentageToDP(10),
                        }}
                    />
                    <Text style={[styles.date, {
                        marginTop: 0,
                        marginLeft: widthPercentageToDP(2),
                        fontFamily: FONTS.semiBold,
                    }]}>
                        {props.time}
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FastImage
                        source={require('../../images/name.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{
                            width: widthPercentageToDP(8),
                            height: widthPercentageToDP(8),
                            marginLeft: widthPercentageToDP(0.5)
                        }}
                    />
                    <Text style={[styles.date, {
                        marginTop: 0,
                        marginLeft: widthPercentageToDP(3.5),
                        fontFamily: FONTS.semiBold,
                    }]}>
                        {props.name}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <View style={[styles.row, {
                    justifyContent: "space-between",
                    marginTop: 0,
                }]}>
                    <Text style={[styles.date, {
                        marginTop: 0,
                        marginLeft: widthPercentageToDP(2),
                        fontFamily: FONTS.semiBold,
                    }]}>
                        {'Remind me 1 Hour before'}
                    </Text>
                    <Switch
                        color={COLORS.primaryColor}
                        value={props.checked}
                        onValueChange={props.setChecked}
                    />
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(85),
        height: heightPercentageToDP(56),
        borderRadius: widthPercentageToDP(5),
        marginTop: heightPercentageToDP(0.4),
        marginRight: widthPercentageToDP(1),
        marginLeft: widthPercentageToDP(2),
        marginBottom: heightPercentageToDP(2),
        backgroundColor: COLORS.white,
        //justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: Platform.OS === "android" ? 5 : 0,
    },
    innerView: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(16),
        flexDirection: "row",
        alignItems: "center",
        //backgroundColor: "yellow",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: heightPercentageToDP(2)
    },
    coloum: {
        width: widthPercentageToDP(50),
        height: heightPercentageToDP(11),
        //backgroundColor: "red",
    },
    img: {
        width: widthPercentageToDP(26),
        height: widthPercentageToDP(26),
        borderRadius: widthPercentageToDP(4),
        //backgroundColor: "black"
    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.h3,
        color: COLORS.black,
        textAlign: 'left',
    },
    date: {
        fontFamily: FONTS.regular,
        fontSize: widthPercentageToDP(3.8),
        color: COLORS.black,
        marginTop: heightPercentageToDP(2)
        //marginLeft: widthPercentageToDP(5)
    },
    row: {
        marginTop: heightPercentageToDP(0.5),
        width: widthPercentageToDP(70),
        height: heightPercentageToDP(6),
        flexDirection: "row",
        alignItems: "center",
        //backgroundColor: "orange",
    },
    vector: {
        width: widthPercentageToDP(6),
        height: widthPercentageToDP(6),
        marginLeft: widthPercentageToDP(1)
    },
    bottomView: {
        position: "absolute",
        bottom: "1%",
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(12),
        //backgroundColor: "purple",
        borderTopWidth: widthPercentageToDP(0.1),
        borderTopColor: COLORS.lightBlack,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Items


