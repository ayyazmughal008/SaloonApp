import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import {COLORS,SIZES,FONTS} from '../../assets/Colors'

const CustomSwitch = ({
    navigation,
    selectionMode,
    roundCorner,
    option1,
    option2,
    onSelectSwitch,
    selectionColor
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(roundCorner);

    const updatedSwitchData = val => {
        setSelectionMode(val);
        onSelectSwitch(val);
    };

    return (
        <View>
            <View
                style={{
                    width: "100%",
                    height: heightPercentageToDP(8),
                    backgroundColor: 'white',
                    borderRadius: getRoundCorner ? widthPercentageToDP(5) : widthPercentageToDP(5),
                    borderWidth: widthPercentageToDP(0.4),
                    borderColor: COLORS.primaryColor,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    //padding: 2,
                    alignSelf: "center",
                    shadowColor: COLORS.primaryColor,
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    elevation: 4
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(1)}
                    style={{
                        flex: 1,
                        backgroundColor: getSelectionMode == 1 ? selectionColor : COLORS.white,
                        borderRadius: getRoundCorner ? widthPercentageToDP(5) : widthPercentageToDP(5),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: widthPercentageToDP(4.5),
                            fontFamily: FONTS.semiBold,
                            color: getSelectionMode == 1 ? 'white' : COLORS.primaryColor,
                        }}>
                        {option1}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(2)}
                    style={{
                        flex: 1,
                        backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
                        borderRadius: getRoundCorner ? widthPercentageToDP(5) : widthPercentageToDP(5),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: widthPercentageToDP(4.5),
                            fontFamily: FONTS.semiBold,
                            color: getSelectionMode == 2 ? 'white' : COLORS.primaryColor,
                        }}>
                        {option2}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CustomSwitch;