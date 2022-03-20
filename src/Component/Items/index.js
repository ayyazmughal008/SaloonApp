import React from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS, FONTS, SIZES } from '../../assets/Colors'
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

const Items = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <FastImage
                source={props.image}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.img}
            />
            <View style={{
                width: "100%",
                height: heightPercentageToDP(10),
                backgroundColor: COLORS.white
            }}>
                <View style={styles.innerView}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <View style={styles.row}>
                        <FastImage
                            source={require('../../images/clock.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={[styles.vector, {
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                marginLeft: widthPercentageToDP(0.1)
                            }]}
                        />
                        <Text style={styles.date}>
                            {props.date}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <FastImage
                            source={require('../../images/timer.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.vector}
                        />
                        <Text style={styles.date}>
                            {props.time}
                        </Text>
                    </View>
                </View>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(58),
        height: heightPercentageToDP(32),
        borderRadius: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(2),
        marginRight: widthPercentageToDP(1),
        marginLeft: widthPercentageToDP(2),
        marginBottom: heightPercentageToDP(2),
        backgroundColor: COLORS.white,
        padding: 2,
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
        width: "80%",
        height: heightPercentageToDP(10),
        alignSelf: "center",
        marginTop: heightPercentageToDP(1.5),
    },
    img: {
        width: "100%",
        height: heightPercentageToDP(16),
        borderTopLeftRadius: widthPercentageToDP(3),
        borderTopRightRadius: widthPercentageToDP(3)
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.h3,
        color: COLORS.black,
        textAlign: 'left',
    },
    date: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.h2,
        color: COLORS.lightBlack,
        marginLeft: widthPercentageToDP(5)
    },
    row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: heightPercentageToDP(1.5),
        //justifyContent: "space-between"
    },
    vector: {
        width: widthPercentageToDP(6),
        height: widthPercentageToDP(6),
        marginLeft: widthPercentageToDP(1)
    }
})

export default Items


