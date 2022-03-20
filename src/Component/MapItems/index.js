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
                    <View style={[styles.row, { marginTop: heightPercentageToDP(2) }]}>
                        <View style={styles.row}>
                            <Text style={[styles.date,{
                                marginTop:0
                            }]}>
                                {props.rating}
                            </Text>
                            <FastImage
                                source={require('../../images/star.png')}
                                resizeMode={FastImage.resizeMode.cover}
                                style={{
                                    width: widthPercentageToDP(5),
                                    height: widthPercentageToDP(5),
                                    marginLeft: widthPercentageToDP(1)
                                }}
                            />
                        </View>
                        <Text style={[styles.date, {
                            marginLeft: widthPercentageToDP(2),
                            marginTop: 0
                        }]}>
                            {props.distance} {" KM"}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(75),
        height: heightPercentageToDP(17),
        borderRadius: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(2),
        marginRight: widthPercentageToDP(1),
        marginLeft: widthPercentageToDP(2),
        marginBottom: heightPercentageToDP(2),
        backgroundColor: COLORS.white,
        justifyContent: "center",
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
        width: widthPercentageToDP(68),
        height: heightPercentageToDP(17),
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    img: {
        width: widthPercentageToDP(22),
        height: widthPercentageToDP(22),
        borderRadius: widthPercentageToDP(4)
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
        color: COLORS.black,
        marginTop: heightPercentageToDP(2)
        //marginLeft: widthPercentageToDP(5)
    },
    coloum: {
        width: widthPercentageToDP(43),
        height: heightPercentageToDP(13),
        //backgroundColor:"red",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    vector: {
        width: widthPercentageToDP(6),
        height: widthPercentageToDP(6),
        marginLeft: widthPercentageToDP(1)
    }
})

export default Items


